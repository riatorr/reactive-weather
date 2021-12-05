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