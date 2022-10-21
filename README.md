
# School Utility Tracker - Frontend

This is the backend of the School Utility Tracker, made in NodeJs and ExpressJS with a MongoDB database connection.

The project currently has a built in frontend, for testing purposes, but a seperate ReactJS frontend has been completed seperately and can be linked for future developemnt of the project.





## Current Functionality (Backend)

- ExpressJS backend with the ability to run the server.

- Link to MongoDB database that has been set up to allow for storage of utility data objects

- Functions for connecting user input with the backend and pushing it to the database

## Functionality of frontend and data visualization

- ReactJS frontend with live data API integration

- Python data visualization system that generates graphs and images from stored objects

## Future Features and Goals

- Fully connect the frontend, backend, and data analysis

- Remove the redundant frontend from the Node/Express server

- Create testing functions to ensure data submission and analysis work without the risk of major errors

- Work on improving the data submission functionality to allow for utility providers to easily or even automatically provide data

## Major Issues

- Integrating the three seperate aspects of the project together

- ### Specific for our client: 

    - No person we have contacted was able to connect us with any source of power, water, and waste data for the school. Until we have a reliable source of utility data the project itself will essentially be useless.

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

