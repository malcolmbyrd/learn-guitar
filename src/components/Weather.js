import React, {useEffect, useState} from 'react'
import store from '../store/index'
import WeatherService from "../services/weather";
import {useDispatch} from "react-redux";

const Weather = () => {
  let state = store.getState()
  const dispatch = useDispatch()
  const latitude = '32.832321'
  const longitude = '-79.828423'

  const [current, setCurrent] = useState({})

  const refreshForecast = () => {
    WeatherService.fetchWeatherForecast(latitude, longitude).then(response => {
      dispatch({type: 'SET_FORECAST', payload: response})
      state = store.getState()
      setCurrent(state.forecast.currently)
      console.log(current.time)
    })
  }

  useEffect(() => {
    refreshForecast()
  }, [])

  return (
    <div>
      <h1>Weather</h1>
      <main>
        <h2>Weather in Mount Pleasant</h2>

        <h3>Weather Tools</h3>
        <button type="button" onClick={refreshForecast}>Refresh Forecast</button>

        {(current !== {}) && (
          <div>
            <h3>Currently</h3>
            <table id="CurrentWeatherTable">
              <thead>
              <tr>
                <td>Time</td>
                <td>Apparent temp</td>
                <td>Cloud Cover</td>
                <td>Dew Point</td>
                <td>Humidity</td>
                <td>UV Index</td>
                <td>Wind Speed</td>
                <td>Wind Gust</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{current.time}</td>
                <td>{current.apparentTemperature}</td>
                <td>{current.cloudCover}</td>
                <td>{current.dewPoint}</td>
                <td>{current.humidity}</td>
                <td>{current.uvIndex}</td>
                <td>{current.windSpeed}</td>
                <td>{current.windGust}</td>
              </tr>
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
};

export default Weather
