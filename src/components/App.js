import React from 'react';
import '../style/App.css';
import WeatherCard from './WeatherCard';
import WeatherSearch from './WeatherSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: {},
      message: "Search for weather conditions in any US city by typing the 5-digit postal code in the search bar above!"
    };
  };

  showCurrentWeather = (currentWeatherData, currentMessage = "") => {
    console.log(this);
    this.setState({
      currentWeather: {...currentWeatherData},
      message: currentMessage
    });
  };

  render() {
    let weatherCard;
    if (Object.keys(this.state.currentWeather).length > 0) {
      weatherCard = <WeatherCard currentWeather={this.state.currentWeather} />;
    } else {
      weatherCard = <div className="center">{this.state.message}</div>
    };

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
  };
};

export default App;