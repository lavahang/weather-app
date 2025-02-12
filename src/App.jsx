import React from 'react'
import './app.css';
import SearchSection from './components/Searchsection';
import CurrentWeather from './components/CurrentWeather';
import HourlyWeatherItem from './components/HourlyWeatherItem';

const App = () => {
  return (
    <> 
    <div className="container">
    <SearchSection/>

    <div className="weather-section">
      <CurrentWeather/>

      
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