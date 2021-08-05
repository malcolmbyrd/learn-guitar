import React from 'react'
import store from '../store/index'
import {useDispatch} from "react-redux"
import WeatherService from "../services/weather"

const Weather = () => {
  const state = store.getState()
  const dispatch = useDispatch()
  const latitude = '32.832321'
  const longitude = '-79.828423'

  WeatherService.fetchWeatherForecast(latitude, longitude)
    .then(response => {
      dispatch({type: 'SET_FORECAST', payload: response})
      console.log(response)
    })

  const getForecast = () => {
    if (state.forecast) {
      alert(JSON.stringify(state.forecast))
    }
  }

  return (
    <>
      <h1>Weather</h1>
      <main>
        <button type="button" onClick={getForecast}>Get Weather Forecast</button>
      </main>
    </>
  )
};

export default Weather
