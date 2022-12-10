
# Enviornmental Tracker

***https://real-nueva-frontend.herokuapp.com/***

This is the backend of the School Utility Tracker, made in NodeJs and ExpressJS with a MongoDB database connection.

The project currently has a built in frontend, for testing purposes, but a seperate ReactJS frontend has been completed seperately and can be linked for future developemnt of the project.





## Current Functionality (Backend)

- This code (backend.py) uses Python to ingest data from the National Oceanic and Atmospheric Administration (NOAA) website, saves the data in a text file, and generates three plots of the data for the last 30, 60, and 120 days. The code uses the ```requests``` package to download the HTML data from the NOAA website, and then parses through the HTML to find the most recent CO2 data value. This value is then appended to a text file called co2.txt. The code then reads this text file and creates three different lists with the data for the last 30, 60, and 120 days. Finally, the code uses the ```matplotlib``` package to generate three plots of this data and saves these plots in an images directory before saving the data as a csv and pushing it to the ```data``` branch of this repository.

- As of 12/9/22, this code now also plots the data as interactive HTML plots. For future development opportunities, these HTML plots could be embedded inside of a larger webpage.

- Python dependencies:
   - ```requests```
   - ```json```
   - ```datetime```
   - ```numpy```
   - ```matplotlib```
   - ```os```
   - ```mpld3```

- ExpressJS backend with the ability to run the server.

- Link to MongoDB database that has been set up to allow for storage of utility data objects

- Functions for connecting user input with the backend and pushing it to the database

## Functionality of frontend and data visualization

- ReactJS frontend with live data API integration

- Python data visualization system that generates graphs and images from stored objects

## Future Features and Goals

- Fully connect the frontend, backend, and data analysis

- Work on improving the data submission functionality to allow for utility providers to easily or even automatically provide data

- Gain access to actual data

## Major Issues

- Integrating the three seperate aspects of the project together

- ### Specific for our client: 

    - No person we have contacted was able to connect us with any source of power, water, and waste data for the school. Until we have a reliable source of utility data the project itself will not be able to display these. 

## Run Locally

Clone the project

```bash
  git clone https://github.com/NavSous/Software-Studio-Project
```

Install dependencies

```bash
  npm install mongodb
```

Start the server

```bash
  node index.js
```

