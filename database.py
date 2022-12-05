#This file is used to pull data from the MongoDB database and update the CSV and JSON files
import pymongo
import certifi
import json
ca = certifi.where()

client = pymongo.MongoClient("mongodb+srv://StudioProject:SoftwareStudio1000@cluster0.wnvcpae.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=ca)
data = client["Data"]
waste = data["Waste"]
water = data["Water"]
power = data["Power/Electricity"]

for i in waste.find():
    print(i)
for i in water.find():
    print(i)
for i in power.find():
    print(i)




