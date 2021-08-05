const fetchWeatherForecast = async(latitude, longitude) => {
  return await fetch(`https://dark-sky.p.rapidapi.com/${latitude},${longitude}?lang=en&units=auto`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "b7be7ebb9dmsha20f0124cc17a27p1915f9jsn4f85067659c8",
      "x-rapidapi-host": "dark-sky.p.rapidapi.com"
    }
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(`Error: ${err}`);
      return `Error: ${err}`;
    });
};

const WeatherService = { fetchWeatherForecast };

export default WeatherService;
