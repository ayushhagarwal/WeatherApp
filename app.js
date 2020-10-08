const request = require("request");
const chalk = require("chalk");

const url =
  "http://api.weatherstack.com/current?access_key=19f77ce57e720739d2d0b88ea05f6962&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  // const data=JSON.parse(response.body);
  // console.log(data.current);
  if (error) {
    console.log(chalk.red.inverse("Unable to connect to weather service"));
  } else if (response.body.error) {
    console.log(chalk.red.inverse("Unable to find location"));
  } else {
    console.log(
      //   response.body means we have access to complete object of data given by the API
      response.body.current.weather_descriptions[0] +
        ". It is Currently " +
        response.body.current.temperature +
        " degrees outside but feels like " +
        response.body.current.feelslike +
        " degrees"
    );
  }
});

const geoCodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXl1c2hhZ2Fyd2FsMjQiLCJhIjoiY2tnMHU5Z3E0MDY2cjMwbWhmNzVhamd0ayJ9.sp7FbWfA3mGk78pZ6DX-GQ";
request({ url: geoCodeURL, json: true }, (error, response) => {
    if(error){
        console.log(chalk.red.inverse("Unable to connect to location service"));
    }else if(response.body.features.length===0){
        console.log(chalk.red.inverse("Unable to find location! Try another Search"));
    }
    else{
        const latitute = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitute, longitude);
    }
  
});
