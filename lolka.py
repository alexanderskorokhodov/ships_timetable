import csv
import algo

data = [
    {"Name": "Alice", "Age": 30, "City": "New York"},
    {"Name": "Bob", "Age": 25, "City": "Los Angeles"},
    {"Name": "Charlie", "Age": 35, "City": "Chicago"},
]


csv_file_path = "output.csv"

print(algo.setting_path(csv_file_path))

# Define the column headers based on the keys in the dictionary.
# fieldnames = data[0].keys()
#
# # Open the CSV file in write mode and write the data.
# with open(csv_file_path, mode="w", newline="") as csv_file:
#     writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
#
#     # Write the header row.
#     writer.writeheader()
#
#     # Write the data rows.
#     for row in data:
#         writer.writerow(row)

csv_file_path = 'output.csv'
data = []



# # Open the CSV file and read its content
# with open(csv_file_path, mode='r', newline='') as csv_file:
#     csv_reader = csv.DictReader(csv_file)
#
#     # Iterate through each row in the CSV and create a dictionary for each row
#     for row in csv_reader:
#         data.append(row)
#
# # Print the list of dictionaries
# print(data)