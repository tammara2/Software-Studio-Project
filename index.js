//Library Imports
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const request = require('request');
const {MongoClient} = require('mongodb');

//ExpressJS
const app = express();

//Setup for MongoDB Database Connection
const uri = "mongodb+srv://StudioProject:SoftwareStudio1000@cluster0.wnvcpae.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

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
app.get('/submit/power', (req, res) => { 
    res.sendFile(path.resolve(__dirname, 'templates/submission', 'submit_data_power.html'));
})
//Get Request for WATER Utility Data Submission Page
app.get('/submit/water', (req, res) => { 
    res.sendFile(path.resolve(__dirname, 'templates/submission', 'submit_data_water.html'));
})
//Get Request for POWER Utility Data Submission Page
app.get('/submit/waste', (req, res) => { 
    res.sendFile(path.resolve(__dirname, 'templates/submission', 'submit_data_waste.html'));
})

//Post Requests for Data Type Selection Page
app.post('/select-data', async (req, res) => {
    //Get the type of data the user selected 
    let user_selected_data_type = req.body
    //Just for testing
    console.log(user_selected_data_type)
    //Run the submit_data function with the given info
    
    //Redirect the user to the associated data submission page
    res.redirect('/'+"submit/"+user_selected_data_type["data_type_selection"].toLowerCase())
})

//Post for submiting the electricity data
app.post("/submit/power", async (req, res) => {
    //Accept data from the frontend
    let submitted_power_data = req.body.power_form
    console.log(submitted_power_data)
    submit_data("Power/Electricity", submitted_power_data)
})
//Post for submiting the electricity data
app.post("/submit/water", async (req, res) => {
    //Accept data from the frontend
    let submitted_power_data = req.body.water_form
    submit_data("Water", submitted_power_data)
})
//Post for submiting the waste data
app.post("/submit/waste", async (req, res) => {
    //Accept data from the frontend
    let submitted_power_data = req.body.waste_form
    await client.connect();
    submit_data("Waste", submitted_power_data)
})

app.post('/register', async (req, res) => {
    await client.connect();
    const database = client.db("Data");
    //X = a user entered selection of the type of data (waste, power, water)
    const poll = database.collection(x);
})

//This is the asynchronous function that allows for the submission of utility data. More work is required to specify the specific variables and order of items 
//The function will be called from within the express function that correlates with the user's selected utility type.
async function submit_data(data_option, quantity_values){
    await client.connect();
    const database = client.db("Data");
    const selection = database.collection(data_option)
    //Data option is a field passed from the frontend when the user selects it.
    let data_field = {}
    if (data_option == "waste"){
        data_field = {
            "total_waste_mass": quantity_values[0],
            "compost_mass": quantity_values[1],
            "recycle_mass": quantity_values[2],
            "trash_mass": quantity_values[3], 
            "hazardous_mass": quantity_values[4]      
        }
    }
    if (data_option == "Power/Electricity"){
        data_field = {
            "total_power_usage": quantity_values[0],
            "grid_power_usage": quantity_values[1],
            "self_power_usage": quantity_values[2],
            "total_power_cost": quantity_values[3]
        }
    }
    if (data_option == "water"){
        data_field = {
            "total_water_usage": quantity_values[0],     
        }
    }
    //Submit results to the mongo server
    const result = await selection.insertOne(data_field);
    //Check result for testing purposes
    console.log(result)
    //Close mongo client
    await client.close();
}

//Run Server
app.listen(process.env.PORT || 8080, () => console.log('Server running at http://127.0.0.1:8080'));