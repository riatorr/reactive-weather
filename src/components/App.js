import React, { useState } from 'react';
import '../style/App.css';
import getDirection from '../wind-direction';
import getAlternateWeatherDescription from '../weather-comments';
import getWeatherIcons from '../icons';
import { capitalizeFirstLetter, roundNumberToWhole } from '../transform-data';
import axios from 'axios';

// This component displays the weather
const WeatherCard = (props) => {
  const currentWeather = props.currentWeather;
  console.log('WeatherCard props: ', currentWeather);
  return (
    <main>
      <div className="weather-card col-12">
        <p className="title">{currentWeather.name}</p>
        <div className="row justify-content-center">
          <div className="image col-3">
            <img alt={currentWeather.weather[0].description + " logo"} src={process.env.PUBLIC_URL + getWeatherIcons(currentWeather.weather[0].icon)} />
          </div>
          <div className="weather-information col-3">
            <p className="temperature">{roundNumberToWhole(currentWeather.main.temp)}&#176; F</p>
            <p className="alternate-description"><span className="description-span">Feels like:</span> "{getAlternateWeatherDescription(roundNumberToWhole(currentWeather.main.temp))}"</p>
            <p className="description">{capitalizeFirstLetter(currentWeather.weather[0].description)}. Low {roundNumberToWhole(currentWeather.main["temp_min"])}&#176; F. Winds {getDirection(currentWeather.wind.deg)} at {roundNumberToWhole(currentWeather.wind.speed)} mph.</p>
            <ul className="details">
              <li>High: {roundNumberToWhole(currentWeather.main["temp_max"])}&#176; F</li>
              <li>Low: {roundNumberToWhole(currentWeather.main["temp_min"])}&#176; F</li>
              <li>Humidity: {currentWeather.main.humidity}%</li>
              <li>Wind: {getDirection(currentWeather.wind.deg)} {roundNumberToWhole(currentWeather.wind.speed)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

// This component searches for weather by postal code
const WeatherSearch = (props) => {
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${postalCode},US&units=imperial&appid=bd0afabcee9b2cb0e014f153e195e81c`)
      .then(({ data }) => {
        props.onSubmit(data);
        setPostalCode("");
      })
      .catch(error => {
        const message = `The postal code ${postalCode} could not be found. Please try again.`;
        console.log(error);
        props.onSubmit({}, message);
      });
  }

  return (
    <div className="weather-search">
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <input id="postalCode" className="col-6" type="text" maxLength="5" value={postalCode} onChange={event => setPostalCode(event.target.value)} placeholder="Search by US 5-digit postal code" required/>
        <button className="col-1">Search</button>
      </form>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: {}
    };
  }

  showCurrentWeather = (currentWeatherData) => {
    console.log(this);
    this.setState({
      currentWeather: {...currentWeatherData}
    });
  }

  render() {
    let weatherCard;
    if (Object.keys(this.state.currentWeather).length > 0) {
      weatherCard = <WeatherCard currentWeather={this.state.currentWeather} />;
    } else {
      weatherCard = <div className="center">Search for weather conditions in any US city by typing the 5-digit postal code in the search bar above!</div>
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Reactive Weather
          </h1>
        </header>
        <WeatherSearch onSubmit={this.showCurrentWeather}/>
        {weatherCard}
      </div>
    );
  }
}

export default App;