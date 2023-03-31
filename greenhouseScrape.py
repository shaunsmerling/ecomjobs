import requests
from datetime import datetime
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

def date_to_unix_timestamp(date_str):
    try:
        # Parse the date string and convert it to a datetime object
        date_obj = datetime.strptime(date_str, "%d/%m/%Y")

        # Convert the datetime object to a Unix timestamp (in seconds)
        unix_timestamp = int(date_obj.timestamp())

        return unix_timestamp
    except ValueError:
        print("Invalid date format. Please use 'dd/mm/yyyy' format.")
        return None


def convert_date_format(date_str):
    try:
        # Parse the date string and convert it to a datetime object
        date_obj = datetime.strptime(date_str, "%d/%m/%Y")

        # Convert the datetime object to the new format "mm/day/year"
        new_date_str = date_obj.strftime("%m/%d/%Y")

        return new_date_str
    except ValueError:
        print("Invalid date format. Please use 'day/mm/year' format.")
        return None

def check_job_exists_in_db(application_url):
    """Check if job with given URL already exists in the database"""
    result = collection.find_one({'application_url': application_url})
    return result is not None

def insert_job_in_db(job_data):
    """Insert job data into the database"""
    result = collection.insert_one(job_data)
    return result.inserted_id

def generate_job_url(company_name, job_position):
    random_num = random.randint(0, 100000000)
    new_url = ''

    # if job_type:
    #  new_url += job_type.replace(' ', '-').replace('&', 'and').replace(',', '').replace('.', '').replace('/', '').replace("'", '').replace('"', '')

    if company_name:
        new_url += company_name.replace(' ', '-').replace('&', 'and').replace(',', '').replace('.', '').replace('/', '').replace("'", '').replace('"', '')

    if job_position:
        if company_name:
            new_url += '-'
        new_url += job_position.replace(' ', '-').replace('&', 'and').replace(',', '').replace('.', '').replace('/', '').replace("'", '').replace('"', '').replace('(', '').replace(')', '') + '-' + str(random_num)

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


def determine_job_type(job_data):
    content = job_data.get("content", "")

    # Use BeautifulSoup to parse and clean the HTML content
    soup = BeautifulSoup(content, 'html.parser')
    content = soup.get_text(separator=' ', strip=True)  # Get the text and remove extra whitespaces

    remote_keywords = ["remote", "work from home", "wfh", "remotely"]
    in_office_keywords = ["in office", "in-office", "onsite", "on-site", "on site"]
    hybrid_keywords = ["flexible", "hybrid"]

    remote = any(keyword in content.lower() for keyword in remote_keywords)
    in_office = any(keyword in content.lower() for keyword in in_office_keywords)
    hybrid = any(keyword in content.lower() for keyword in hybrid_keywords)

    if hybrid:
        return "Hybrid"
    elif remote:
        return "Remote"
    elif in_office:
        return "In-office"
    else:
        return ""

def get_job_board(board_id):
    geolocator = Nominatim(user_agent="my-app")


    base_url = f'https://boards-api.greenhouse.io/v1/boards/{board_id}/jobs?content=true'
    response = requests.get(base_url)
    jobs_data = response.json()['jobs']

    formatted_data = []

    for entry in jobs_data:
        try:
            title = entry.get('title', 'N/A')


            department = entry.get('departments', [{}])[0].get('name', 'N/A')
            content = html.unescape(entry.get('content', 'N/A'))
            job_type = determine_job_type(entry)
            parsed_content = parse_content(content)
            location = entry.get('location', {}).get('name', '')
            application_url = entry.get('absolute_url', 'N/A')
            posted_at = entry.get('updated_at', 'N/A')
            posted_at_date =datetime.strptime(posted_at[:-6], '%Y-%m-%dT%H:%M:%S').strftime('%d/%m/%Y')
            date_in_mmddyyyy = convert_date_format(posted_at_date)
            unix_date = date_to_unix_timestamp(posted_at_date)
            salary_range = re.findall(r'\$[\d,]+-?\$?[\d,]*', content)
            if salary_range:
                salary_values = salary_range[0].replace('$', '').replace(',', '').split('-')
                if len(salary_values) == 2:
                    salary_min = int(salary_values[0])
                    salary_max = int(salary_values[1])
                else:
                    salary_min = 1
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

            job_url = generate_job_url(board_id, title)
            company_url = "www." + board_id + ".com"

            # Create the result object
            result = {
                'company_name': board_id.capitalize(),
                'job_type': job_type,
                'job_position': title,
                'company_url': company_url,
                'job_category': department,
                'city': city,
                'location': country,
                'application_url': application_url,
                'postedat': date_in_mmddyyyy,
                'jobUrl': job_url,
                'datets': str(unix_date),
                'salaryMin':  str(salary_min),
                'salaryMax': str(salary_max),
                'company_description': "",
                'job_description': parsed_content['job_description'],
                'job_requirements': parsed_content['job_requirements'],
                'logo': board_id + ".jpeg",


            }


            formatted_data.append(result)

        except IndexError:
            print("Error while parsing content, skipping this job.")
            continue


    return formatted_data

def main():
          # When you add company names to the board, make sure to save their logo .jpeg
    boards = [
        # "quip", -
        # 'harrys', -
        # 'casper',
        # 'gymshark',
        # 'away',
        # 'glossier',
        # 'allbirds'
        # 'commonthreadcollective'
        # 'everlane',
        # 'prose',
        # 'parade'
        # 'mejuri'
        # 'dailyharvest',
        # 'naadam',
        # 'rothys',
        # 'dollarshaveclub',
        # 'cometeer',
    #  'ruggable',
    #  'barkbox',
    # 'bombas',
    # 'meundies',
    # 'seed',
    # 'billie',
    # 'theragun'
    # 'omaze',
    # 'thinx'
    'fashionnova'
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


    #Get rid of &nbsp; in job descriptions / requirements and &amp
    # change starting min salary if there is a max to 100k
