from datetime import datetime

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

# Example usage:
date_str = "16/03/2023"
new_date_str = convert_date_format(date_str)
print(new_date_str)