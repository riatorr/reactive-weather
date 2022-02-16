import React, { useState } from 'react';
import '../style/App.css';
import axios from 'axios';

// This component searches for weather by postal code
const WeatherSearch = (props) => {
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = async (event) => {
    let message;

    event.preventDefault();
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${postalCode},US&units=imperial&appid=${process.env.REACT_APP_OPENWEATHER_CLIENT_SECRET}`)
      .then(({ data }) => {
        props.onSubmit(data);
        setPostalCode("");
      })
      .catch(error => {
        message = `The postal code ${postalCode} could not be found. Please try again.`;
        props.onSubmit(null, message);
      });
  }

  return (
    <div className="weather-search container">
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <input id="postalCode" className="col-12 col-sm-6" type="text" maxLength="5" value={postalCode} onChange={event => setPostalCode(event.target.value)} placeholder="Search by US 5-digit postal code" required/>
        <button className="mt-1 mt-sm-0 col-3 col-sm-2 col-xl-1">Search</button>
      </form>
    </div>
  );
}

export default WeatherSearch;