const HourlyWeatherItem = ({hourlyWeather}) => {
  const temperature = Math.floor(hourlyWeather.temp_c)
  const time = hourlyWeather.time
  return (
    <li className="weather-item">
      <p className="time">{time}</p>
      <img src="icons/clouds.svg" className="weather-icon" />
      <p className="temperature">{temperature}</p>
    </li>
  );
};
export default HourlyWeatherItem;