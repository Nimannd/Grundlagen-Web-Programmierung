const express = require('express');
const cors = require('cors');
const app = express();

const data = require('./weather.json');

// Use the cors middleware
app.use(cors());

// Serve static files from the 'static' folder
app.use(express.static('static'))

// Define weather api endpoint
app.get("/weather", (req, res, next) => {
    res.json(data);
    console.log("Weather request served");
});

// Define an endpoint which returns a sin value which revolvs each 10 seconds by current time
app.get("/sin", (req, res, next) => {
    let currentTime = new Date();
    let rads = (currentTime.getSeconds() % 10) * Math.PI * 2 / 10;
    let sinValue = Math.sin(rads);
    res.json({ rads: rads, sin: sinValue });
    console.log("Sin request served");
});

// Start the server
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
