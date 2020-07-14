// constants
const PORT = 3000;
const WEATHER_API_APP_ID = "1ac54f87b9866f83286c718c59e4ad7b";

// axios for data fetching
const axios = require("axios");

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
const e = require("express");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// post data handler
const handlePostData = async ({ body }, res) => {
  try {
    if (!body) throw Error("body is required");
    const { zip, feelings, date } = body;
    if (!zip) throw Error("'zip' is required in body");
    if (!feelings) throw Error("'feelings' is required in body");
    if (!date) throw Error("'date' is required in body");
    const { data: weatherResponse } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${WEATHER_API_APP_ID}`,
      {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (!weatherResponse) throw Error("Couldn't get data from the open weather API with the given ZIP code");
    projectData = {
      content: feelings,
      temp: weatherResponse.main.temp,
      date,
    };
    res.json({ result: true });
  } catch (e) {
    res.json({ error: e.message, result: false });
  }
};

// get data handler
const handleGetData = (_, res) => {
  res.send(projectData);
};

// REST api routes
app.get("/api/data", handleGetData);
app.post("/api/data", handlePostData);
