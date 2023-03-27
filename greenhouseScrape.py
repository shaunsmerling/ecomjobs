import requests
import json
import html
import re
from bs4 import BeautifulSoup
from geopy.geocoders import Nominatim
import random
from datetime import datetime
import base64
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

db_url = os.getenv("DB_URL")

# Connect to MongoDB database
client = MongoClient(db_url, tlsAllowInvalidCertificates=True)
db = client["ejserver"]
collection = db["Job"]

def check_job_exists_in_db(application_url):
    """Check if job with given URL already exists in the database"""
    result = collection.find_one({'application_url': application_url})
    return result is not None

def insert_job_in_db(job_data):
    """Insert job data into the database"""
    result = collection.insert_one(job_data)
    return result.inserted_id

def generate_job_url(company_name, job_position, job_type):
    random_num = random.randint(0, 100000000)
    new_url = ''
    
    if job_type:
        new_url += job_type.replace(' ', '-').replace('&', 'and').replace(',', '').replace('.', '').replace('/', '')
        
    if company_name:
        if job_type:
            new_url += '-'
        new_url += company_name.replace(' ', '-').replace('&', 'and').replace(',', '').replace('.', '').replace('/', '')
    
    if job_position:
        if company_name:
            new_url += '-'
        new_url += job_position.replace(' ', '-').replace('&', 'and').replace(',', '').replace('.', '').replace('/', '').replace('(', '').replace(')', '') + '-' + str(random_num)
    
    job_url = new_url.lower()
    return job_url

def parse_content(content):
    # Remove HTML tags and CSS
    clean_content = re.sub('<[^<]+?>', '', content)

    # Split the content into sections
    sections = clean_content.split('\n\n')

    #clean that bih
    clean_content = clean_content.replace('&nbsp;', ' ').replace('\n', ' ').replace('\r', '')

    # Extract the company description, job description, and job requirements
    company_description = sections[1]
    job_description = sections[3] + '\n\n' + '\n'.join(sections[4:9])
    # job_requirements = '\n'.join(sections[10:])

    # Create the result object
    result = {
        'job_description': company_description,
        'job_requirements': job_description,
    }

    return result

def get_job_board(board_id):
    geolocator = Nominatim(user_agent="my-app")
    

    base_url = f'https://boards-api.greenhouse.io/v1/boards/{board_id}/jobs?content=true'
    response = requests.get(base_url)
    jobs_data = response.json()['jobs']

    formatted_data = []

    for entry in jobs_data:
        title = entry.get('title', 'N/A')
        department = entry.get('departments', [{}])[0].get('name', 'N/A')
        content = html.unescape(entry.get('content', 'N/A'))
        parsed_content = parse_content(content)
        location = entry.get('location', {}).get('name', 'N/A')
        application_url = entry.get('absolute_url', 'N/A')
        updated_at = entry.get('updated_at', 'N/A')

        salary_range = re.findall(r'\$[\d,]+-?\$?[\d,]*', content)
        if salary_range:
            salary_values = salary_range[0].replace('$', '').replace(',', '').split('-')
            if len(salary_values) == 2:
                salary_min = int(salary_values[0])
                salary_max = int(salary_values[1])
            else:
                salary_min = 0
                salary_max = int(salary_values[0])
        else:
            salary_min = salary_max = 0


        if salary_min < 1000:
            salary_min *= 1000
        if salary_max < 1000:
            salary_max *= 1000

        # Extract the city from the location string
        city = location.split(',')[0].strip()

        # Use Geopy to get the country from the city
        country = 'N/A'
        try:
            location = geolocator.geocode(city, addressdetails=True, exactly_one=True)
            if location:
                address = location.raw['address']
                country = address.get('country', 'N/A')

                if country in ['United States', 'United States of America', 'US']:
                    country = 'USA'
                    
                elif country in ['United Kingdom', 'England']:
                    country = 'UK'
                    
                elif country in ['Canada']:
                    country = 'CA'
                    
                elif country in ['Australia', 'AU']:
                    country = "AUS"
                    
        except:
            pass

        logo_data = None
        try:
            response = requests.get(application_url)
            soup = BeautifulSoup(response.content, 'html.parser')
            logo_url = soup.find('img')['src']
            logo_response = requests.get(logo_url)
            logo_data = base64.b64encode(logo_response.content).decode('utf-8')
        except:
            pass

        job_url = generate_job_url(board_id, title, department)
        company_url = "www." + board_id + ".com"

        # Create the result object
        result = {
            'company_name': board_id.capitalize(),
            'job_position': title,
            'company_url': company_url,
            'job_category': department,
            'city': city,
            'location': country,
            'application_url': application_url,
            'updated_at': datetime.strptime(updated_at[:-6], '%Y-%m-%dT%H:%M:%S').strftime('%d/%m/%Y'),
            'jobUrl': job_url,
            'salaryMin':  salary_min,
            'salaryMax': salary_max,
            'Job Description': parsed_content['job_description'],
            'Job Requirements': parsed_content['job_requirements'],
            'logo': logo_data
        }
        
        formatted_data.append(result)

        
    return formatted_data

def main():
    boards = [
        'harrys',
        'casper',
        'gymshark',
        'away',
        'hellofresh'
    ]

    for board in boards:
        jobs = get_job_board(board)
        for job in jobs:
            application_url = job['application_url']
            job_exists = check_job_exists_in_db(application_url)
            if not job_exists:
                print("Inserting new job...")
                insert_job_in_db(job)
            else:
                print(f"Job '{job['job_position']}' already exists in database. Skipping...")




if __name__ == '__main__':
    main()


    #fix job categories, as they are certain terms for our categories.
    #fix sizing of some base64 images. It doesn't fit in Algolia 