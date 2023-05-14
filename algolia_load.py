from algoliasearch.search_client import SearchClient
import os
from dotenv import load_dotenv, find_dotenv
from pymongo import MongoClient

load_dotenv(find_dotenv())

algolia_app_id = os.getenv("ALGOLIA_APP_ID")
algolia_admin_key = os.getenv("ALGOLIA_ADMIN_KEY")


algolia_client = SearchClient.create(algolia_app_id, algolia_admin_key)
algolia_index = algolia_client.init_index('ecomjobs_index')




db_host = 'ejserver0.krz3l.mongodb.net'
db_name = 'ejserver'
db_user = 'smerlinger'
db_password = 'rosalina2898'
collection_name = 'Job'

connection_string = f'mongodb+srv://{db_user}:{db_password}@{db_host}/{db_name}?retryWrites=true&w=majority'

# Create MongoDB Client
mongo_client = MongoClient(connection_string, tlsAllowInvalidCertificates=True)
# Get database instance
mongo_database = mongo_client[db_name]
# Get collection instance
mongo_collection = mongo_database[collection_name]

# Retrieve the first 5000 records from collection items
mongo_query = mongo_collection.find()
initial_items = []
new_items = []

for item in mongo_query:
    if (len(initial_items) < 5000):
        item['objectID'] = str(item.pop('_id'))

         # Check if datets is not None before converting to int
        datets = item.get('datets')
        if datets is not None:
            item['datets'] = int(datets)


            # Convert salaryMin and salaryMax to integers
    if 'salaryMin' in item and item['salaryMin'] is not None:
        if ',' in item['salaryMin']:
            item['salaryMin'] = int(item['salaryMin'].replace(',', ''))
        elif '.' in item['salaryMin']:
            item['salaryMin'] = int(float(item['salaryMin']))
        else:
            item['salaryMin'] = int(item['salaryMin'])
    if 'salaryMax' in item and item['salaryMax'] is not None:
        if ',' in item['salaryMax']:
            item['salaryMax'] = int(item['salaryMax'].replace(',', ''))
        elif '.' in item['salaryMax']:
            item['salaryMax'] = int(float(item['salaryMax']))
        else:
            item['salaryMax'] = int(item['salaryMax'])


        initial_items.append(item)

# Fetch existing objectIDs from the Algolia index
existing_appURLs = [hit['application_url'] for hit in algolia_index.browse_objects({'attributesToRetrieve': ['application_url']})]

# Filter new_items based on existing_objectIDs
new_items = [item for item in initial_items if item['application_url'] not in existing_appURLs]

# Print out the size of our initial_items and new_items arrays
print("Initial items:", len(initial_items))
print("New items:", len(new_items))

# Upload the new_items list to your Algolia index
if new_items:
    response = algolia_index.save_objects(new_items)
    print(response)
else:
    print("No new items to upload.")
