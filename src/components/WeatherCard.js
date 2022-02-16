import '../style/App.css';
import getDirection from '../wind-direction';
import getAlternateWeatherDescription from '../weather-comments';
import getWeatherIcons from '../icons';
import { capitalizeFirstLetter, roundNumberToWhole } from '../transform-data';

// This component displays the weather
const WeatherCard = (props) => {
  const currentWeather = props.currentWeather;
  return (
    <main>
      <div className="weather-card col-12">
        <div className="title-row row justify-content-center">
          <div className="title col-12">
            <p>{currentWeather.name}</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="weather-information col-9 col-sm-7 col-lg-6 col-xl-5">
            <div className="row justify-content-center d-flex align-items-center">
              <div className="image col-4 p-0">
                <img alt={currentWeather.weather[0].description + " logo"} src={process.env.PUBLIC_URL + getWeatherIcons(currentWeather.weather[0].icon)} />
              </div>
              <div className="col-5 p-2">
                <p className="temperature">{roundNumberToWhole(currentWeather.main.temp)}&#176; F</p>
              </div>
            </div>
            <div className="row justify-content-center d-flex align-items-center">
              <p className="col-12 alternate-description"><span className="description-span">Feels like:</span> "{getAlternateWeatherDescription(roundNumberToWhole(currentWeather.main.temp))}"</p>
              <p className="col-12 description">{capitalizeFirstLetter(currentWeather.weather[0].description)}. Low {roundNumberToWhole(currentWeather.main["temp_min"])}&#176; F. Winds {getDirection(currentWeather.wind.deg)} at {roundNumberToWhole(currentWeather.wind.speed)} mph.</p>
              <ul className="col-12 details">
                <li><span className="details-span">High:</span> {roundNumberToWhole(currentWeather.main["temp_max"])}&#176; F</li>
                <li><span className="details-span">Low:</span> {roundNumberToWhole(currentWeather.main["temp_min"])}&#176; F</li>
                <li><span className="details-span">Humidity:</span> {currentWeather.main.humidity}%</li>
                <li><span className="details-span">Wind:</span> {getDirection(currentWeather.wind.deg)} {roundNumberToWhole(currentWeather.wind.speed)} mph</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WeatherCard;