const chalk = require("chalk");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log(
    chalk.red.inverse(
      "Please provide the address or the city you are looking for"
    )
  );
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(chalk.red.inverse(error));
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(chalk.red.inverse(error));
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
}
