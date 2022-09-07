const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const request = require('request');
const app = express();

//Insert Mongo Code Here

app.use("/styles", express.static("styles"))
app.set('views', __dirname + '/templates')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );

//Get Request Views
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'templates', 'data.html'));
});
app.get('/submit-data', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'templates', 'submit-data.html'));
})
app.post('/submit-data', async (req, res) => {
    await client.connect();
    const database = client.db("Data");
    //X = a user entered selection of the type of data (waste, power, water)
    const poll = database.collection(x);
})
//Code from one of my existing projects, im just using it for the mongo syntax
app.post('/poll/:id', async (req, res) => {
    //Get the actual DB object by ID
    let url = req.originalUrl;
    let id1 = url.split("l/")
    let id = id1[1]
    await client.connect();
    const database = client.db("Data");
    const poll = database.collection("PollData");
    x = await poll.findOne({id: id})
    let myquery = {id: id}
    let req_ip = x.owner_ip
    //Check if user ended poll
    if(req.body.end_poll!=undefined && req_ip == req.socket.remoteAddress){
        //Update poll to determine winner
        const v = Object.values(x.response_options)
        let b = Object.values(x.response_options)
        let c = x.response_options
        z = Math.max.apply(Math, b)
        //Format is just the key
        win = Object.keys(c).find(key => c[key] === z)
        let newvalues = { $set: { complete:true, winner:win} };
        await poll.updateOne(myquery, newvalues)
        await client.close();
        //Redirect to results area
        res.redirect('/poll/' + id + '/results')
    }
    else{
        //Find out what the user picked
        let r_list = [req.body.q1, req.body.q2, req.body.q3, req.body.q4]
        let lst = Object.keys(x.response_options)
        console.log(lst)
        let selected = 0
        for(let i = 0; i < r_list.length; i++) {
            if(r_list[i] != undefined) {
                selected = lst[i]
            }
        }
        //Update the object at the selected position
        x.response_options[selected] += 1
        b = x.ip_list
        //Check if user is commiting fraud before updating numbers
        if(b.includes(req.socket.remoteAddress)){
            res.redirect('/poll/' + id + '/voter-fraud')
        }
        //Update Values
        else{
            b.push(req.socket.remoteAddress)
            let newvalues = { $set: { response_options: x.response_options, ip_list: b} };
            await poll.updateOne(myquery, newvalues)
            await client.close();
            res.redirect('/poll/' + id + '/submited')
        }     
    }
})