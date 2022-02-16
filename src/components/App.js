import React from 'react';
import '../style/App.css';
import WeatherCard from './WeatherCard';
import WeatherSearch from './WeatherSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: null,
      message: "Search for weather conditions in any US city by typing the 5-digit postal code in the search bar above!"
    };
  };

  showCurrentWeather = (currentWeatherData, currentMessage = "") => {
    this.setState({
      currentWeather: {...currentWeatherData},
      message: currentMessage
    });
  };

  render() {  
    let weatherCard;
    
    if (this.state.currentWeather !== null) {
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