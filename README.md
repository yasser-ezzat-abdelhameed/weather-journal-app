# Weather-Journal App Project

Weather-Journal project is a simple web app that let's you figure out the temperature of an area according to it's zip code.
This is the third project in the [Front End Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)

## Project setup

- Download or clone the project
- Install the dependencies with `npm install`
- Run the project with `npm start`
- Navigate to http://localhost:3000 with your favorite web browser

## How it works

- When you navigate to http://localhost:3000 with a web browser, you are going to see a web page with a form and a result section.
- You are required to fill in 2 text fields, a 'zip code' field and a 'feelings' field.
- You can then submit the form by clicking on 'Generate' button.
- If the zip code is valid, the result section is going to have data of the date of the request, the temperature of the area which you have filled in it's zip code, and your response to 'How are you feeling today?' text area.
- Each time you navigate to the web app, a request is going to be fired to fetch the latest date, temperature, and feelings.

## Resources used

- OpenWeather APIs to get the temperature from [OpenWeather](https://openweathermap.org/)
