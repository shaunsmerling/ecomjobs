import requests
from bs4 import BeautifulSoup
import random
import geopy.geocoders
from datetime import datetime 
from datetime import date
import re
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from google.auth.transport.requests import Request
from google.oauth2 import service_account
from google.auth.exceptions import RefreshError
from geopy.exc import GeocoderTimedOut


load_dotenv()

db_url = os.getenv("DB_URL")


# Connect to MongoDB database
client = MongoClient(db_url, tlsAllowInvalidCertificates=True)
db = client["ejserver"]
collection = db["Job"]

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

def check_job_exists_in_db(application_url):
    """Check if job with given URL already exists in the database"""
    result = collection.find_one({'application_url': application_url})
    return result is not None

def insert_job_in_db(job_data):
    """Insert job data into the database"""
    result = collection.insert_one(job_data)
    return result.inserted_id

def send_notification(url, action):
    try:
        credentials = service_account.Credentials.from_service_account_file(
            "ep.json",
            scopes=["https://www.googleapis.com/auth/indexing"],
        )

        credentials.refresh(Request())

        access_token = credentials.token

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {access_token}",
        }

        data = {
            "url": url,
            "type": action,
        }

        response = requests.post(
            "https://indexing.googleapis.com/v3/urlNotifications:publish",
            headers=headers,
            json=data,
        )

        if response.status_code != 200:
            print("Failed to send notification:", response.text)
        else:
            print("Notification sent to Google Indexing API...")
    except RefreshError as e:
        print("Failed to refresh access token:", e)

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


import re
import geopy

def parse_info(location):
    # Use regular expression to find the city/state
    city_state_match = re.search(r"\b[A-Z][a-zA-Z]*(?:\s+[A-Z][a-zA-Z]*)*(?:\s*,\s*[A-Z]{2})?\b", location)
    if city_state_match:
        city_state = city_state_match.group().strip()
    else:
        city_state = None

    # Extract the country from the location string
    parts = location.split(',')
    country = parts[-1].strip()

    # Assign job type i.e. remote, hybrid, or in-office
    job_type = ''
    if "remote" in location.lower():
        job_type = "Remote"
    elif "hybrid" in location.lower():
        job_type = "Hybrid"
    else:
        job_type = "In-Office"

    # Use Geopy to get the country from the city/state if country is not present
    if country not in ['USA', 'UK', 'CA', 'AUS'] and city_state:
        geolocator = geopy.geocoders.Nominatim(user_agent='my_app')
        try:
            location = geolocator.geocode(city_state, addressdetails=True, exactly_one=True)
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

                else:
                    country = ''
        except (AttributeError, GeocoderTimedOut):
            pass

    return (city_state, country, job_type)



def collect_jobs(company_name):
    print(f"Collecting jobs for {company_name}...")
    url = f'https://jobs.lever.co/{company_name}'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    job_listings = soup.select(".posting")


    formatted_data = []

    for job in job_listings:
        try:
            job_title = job.select_one("[data-qa='posting-name']").get_text().strip()
            job_info = job.select_one(".posting-categories").get_text().strip()
            job_team = job.select_one("div.posting-categories span.sort-by-team").get_text().strip()
            app_url = job.select_one(".posting-apply .posting-btn-submit")["href"]
            job_page = requests.get(app_url)
            posted_at = datetime.today().date()
            posted_at_date = posted_at.strftime('%d/%m/%Y')
            date_in_mmddyyyy = convert_date_format(posted_at_date)
            unix_date = date_to_unix_timestamp(posted_at_date)
            job_soup = BeautifulSoup(job_page.content, "html.parser").text
            job_soup_no_text = BeautifulSoup(job_page.content, "html.parser")
            location = job.find("span", class_="sort-by-location posting-category small-category-label location").text.strip()

            
                        # define regular expression pattern
            pattern = r"[A-Z][a-zA-Z\s-]+:"

            # split the job description by section headers
            sections = re.split(pattern, job_soup)[1:]
            job_desc = ''
            job_req = ''

            # iterate through sections and assign to job_req or job_desc
            for i, section in enumerate(sections):
                if i % 2 == 0:
                    job_desc += section.strip()
                else:
                    job_req += section.strip()

            job_req = job_req[:job_req.find("Apply for this job")]
            
            salary_range = re.findall(r'\$[\d,]+-?\$?[\d,]*', job_soup_no_text.select_one(".content").get_text())
            if salary_range:
                salary_values = salary_range[0].replace('$', '').replace(',', '').split('-')
                if len(salary_values) == 2:
                    salary_min = int(salary_values[0])
                    salary_max = int(salary_values[1])
                else:
                    salary_min = salary_max = int(salary_values[0])
            else:
                salary_min = salary_max = 1000000


            
            city_state, country, job_type = parse_info(job_info)
            
            job_url = generate_job_url(company_name, job_title)
            company_url = "www." + company_name + ".com"


            result = {
                    'company_name': company_name.capitalize(),
                    'job_type': job_type,
                    'job_position': job_title,
                    'company_url': company_url,
                    'job_category': job_team,
                    'city': city_state,
                    'location': country,
                    'application_url': app_url,
                    'postedat': date_in_mmddyyyy,
                    'jobUrl': job_url,
                    'datets': str(unix_date),
                    'salaryMin':  str(salary_min),
                    'salaryMax': str(salary_max),
                    'job_description': job_desc,
                    'job_requirements': job_req,
                    'logo': company_name + ".jpeg",

                }
        
            formatted_data.append(result)

        except IndexError or job_desc == '' or job_req == '':
            print("Error while parsing content, skipping this job.")
            continue

        # print(formatted_data)
    return formatted_data
    
def main():

    company_name = [
        'curology',
        'sundaysfordogs',
        'boldcommerce',
        'milliondollarbabyco',
        'grove',
        'attentive'
    ]

    for company in company_name:
        try:
            jobs = collect_jobs(company)
        except requests.exceptions.RequestException as e:
            print(f"An error occurred while fetching jobs for company '{company}': {e}. Skipping...")
            continue

        for job in jobs:
            application_url = job['application_url']
            job_exists = check_job_exists_in_db(application_url)

            if not job_exists:
                print("Inserting new job...")
                insert_job_in_db(job)

                job_url = f"https://www.ecomportal.co/job/{job['jobUrl']}"
                send_notification(job_url, "URL_UPDATED")

            else:
                print(f"Job '{job['job_position']}' already exists in database. Skipping...")   

if __name__ == '__main__':
    main()
