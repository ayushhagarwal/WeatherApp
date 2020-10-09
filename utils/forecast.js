const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=19f77ce57e720739d2d0b88ea05f6962&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          ". It is currently " +
          response.body.current.temperature +
          " degress F out. But it feels like " +
          response.body.current.feelslike +
          " degrees F."
      );
    }
  });
};

module.exports = forecast;
