#This file is used to pull data from the MongoDB database and update the CSV and JSON files
import pymongo
from bson import json_util
import certifi
import json
ca = certifi.where()

client = pymongo.MongoClient("mongodb+srv://StudioProject:SoftwareStudio1000@cluster0.wnvcpae.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=ca)
database = client["Data"]
waste = database["Waste"]
water = database["Water"]
power = database["Power/Electricity"]
def parse_json(data):
    return json.loads(json_util.dumps(data))
for i in waste.find():
    with open("env_data.json", "w") as data:
        information = parse_json(i)
        data.write(json.dumps(information))
        data.close()

for i in water.find():
    with open("env_data.json", "w") as data:
        information = parse_json(i)
        data.write(json.dumps(information))
        data.close()

for i in power.find():
    with open("env_data.json", "w") as data:
        information = parse_json(i)
        data.write(json.dumps(information))
        data.close()




