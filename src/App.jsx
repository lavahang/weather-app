import React from 'react'
import { useState } from 'react';
import './app.css';
import SearchSection from './components/Searchsection';
import CurrentWeather from './components/CurrentWeather';
import HourlyWeatherItem from './components/HourlyWeatherItem';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  // Fetches weather details based on the API URL
  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);

      const temperature = data.current.temp_c;
      const description = data.current.condition.text;

      setCurrentWeather({ temperature,description })
      console.log(temperature)
            
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <> 
    <div className="container">
    <SearchSection getWeatherDetails={getWeatherDetails}/>

    <div className="weather-section">
      <CurrentWeather currentWeather={currentWeather}/>

      
          {/* Hourly weather forecast list */}
          <div className="hourly-forecast">
            <ul className="weather-list">
             
                <HourlyWeatherItem />
                <HourlyWeatherItem />
                <HourlyWeatherItem />
           
            </ul>
          </div>
    </div>

    </div>
    
    
    
    </>
  )
}

export default App