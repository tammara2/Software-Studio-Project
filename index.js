//Library Imports
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const request = require('request');
const app = express();

//Setup for MongoDB Database Connection
const MongoClient = require('mongodb').MongoClient;
var mongo_database_name = encodeURIComponent("StudioProject")
var mongo_password = encodeURIComponent("SoftwareStudio10/");
const uri = `mongodb+srv://${mongo_database_name}:${mongo_password}@cluster0.wnvcpae.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});

//Setup for static pages, HTML and CSS
app.use("/styles", express.static("styles"))
app.set('views', __dirname + '/templates')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );

//Get Request for Home Page
app.get('/', (req, res) => { 
    res.sendFile(path.resolve(__dirname, 'templates', 'data.html'));
});
//Get Request for Utility Data Type Selection Page
app.get('/select-data', (req, res) => { 
    res.sendFile(path.resolve(__dirname, 'templates', 'select_data.html'));
})

//Get Request for POWER Utility Data Submission Page
app.get('/submit-data-power', (req, res) => { 
    res.sendFile(path.resolve(__dirname, 'templates/submission', 'submit_data_power.html'));
})
//Get Request for WATER Utility Data Submission Page
app.get('/submit-data-water', (req, res) => { 
    res.sendFile(path.resolve(__dirname, 'templates/submission', 'submit_data_water.html'));
})
//Get Request for POWER Utility Data Submission Page
app.get('/submit-data-waste', (req, res) => { 
    res.sendFile(path.resolve(__dirname, 'templates/submission', 'submit_data_waste.html'));
})

//Post Requests for Data Submission Page
app.post('/submit-data', async (req, res) => {
    await client.connect();
    const database = client.db("Data");
    //X = a user entered selection of the type of data (waste, power, water)
    const poll = database.collection(x);
})
app.post('/register', async (req, res) => {
    await client.connect();
    const database = client.db("Data");
    //X = a user entered selection of the type of data (waste, power, water)
    const poll = database.collection(x);
})
//Run Server
app.listen(process.env.PORT || 8080, () => console.log('Server running at http://127.0.0.1:8080'));