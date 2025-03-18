import React from 'react'
import { useState } from 'react';
import './app.css';
import SearchSection from './components/Searchsection';
import CurrentWeather from './components/CurrentWeather';
import HourlyWeatherItem from './components/HourlyWeatherItem';
import { weatherCodes } from './constant';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecasts, setHourlyForecasts] = useState([]);

  const filterHourlyForecast = (hourlyData) => {
    const currentHour = new Date().setMinutes(0,0,0)
    const next24Hours = currentHour + 24*60*60*1000;
// filtering to 24 hours
    const next24HoursData = hourlyData.filter(({time}) =>{
      const forecastTime = new Date(time).getTime()
      return forecastTime >= currentHour && forecastTime <= next24Hours
    })
    console.log(next24HoursData);
    setHourlyForecasts(next24HoursData);
    
  }

  // Fetches weather details based on the API URL
  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data); //can be comiited to remove display in console

      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find(icon =>weatherCodes[icon].includes(data.current.condition.code))

      setCurrentWeather({ temperature,description, weatherIcon })
      console.log(temperature)

      // combine hourly data from both forecast days
      const combinedHourlyData = [...data.forecast.forecastday[0].hour,...data.forecast.forecastday[1].hour]
            console.log(combinedHourlyData )
            filterHourlyForecast(combinedHourlyData)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <> 
    <div className="container">
    {/* search section */}
    <SearchSection getWeatherDetails={getWeatherDetails}/>

    <div className="weather-section">
      <CurrentWeather currentWeather={currentWeather}/>

      
          {/* Hourly weather forecast list */}
          <div className="hourly-forecast">
            <ul className="weather-list">
              {/* sending props to hourlyweather components */}
             {hourlyForecasts.map((hourlyWeather) => (
              <HourlyWeatherItem key={hourlyWeather.time_epoch} hourlyWeather={hourlyWeather}/>
             ))}
                
                
           
            </ul>
          </div>
    </div>

    </div>
    
    
    
    </>
  )
}

export default App