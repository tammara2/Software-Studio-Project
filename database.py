#This file is used to pull data from the MongoDB database and update the CSV and JSON files
import pymongo
import csv
from bson import json_util
import certifi
import json
ca = certifi.where()
#Create the PyMongo Client
client = pymongo.MongoClient("mongodb+srv://StudioProject:SoftwareStudio1000@cluster0.wnvcpae.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=ca)
#Link the client to the database
database = client["Data"]
#Define variables with the collection data from the MongoDB database
waste = database["Waste"]
water = database["Water"]
power = database["Power/Electricity"]

#This function is used to parse all the JSON data
def parse_json(data):
    return json.loads(json_util.dumps(data))
#The following for loops update the local stores of data

#--------------------------------------------------------#

#Update Waste Data
for i in waste.find():
    with open("env_data.json", "w") as data:
        information = parse_json(i)
        data.write(json.dumps(information))
        data.close()
    with open('env_data.csv', 'w') as f:
        writer = csv.writer(f)
        writer.writerow(i)
#Update Water Data  
for i in water.find():
    with open("env_data.json", "w") as data:
        information = parse_json(i)
        data.write(json.dumps(information))
        data.close()
    with open('env_data.csv', 'w') as f:
        writer = csv.writer(f)
        writer.writerow(i)
#Update Power Data
for i in power.find():
    with open("env_data.json", "w") as data:
        information = parse_json(i)
        data.write(json.dumps(information))
        data.close()
    with open('env_data.csv', 'w') as f:
        writer = csv.writer(f)
        writer.writerow(i)




