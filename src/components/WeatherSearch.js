import React, { useState } from 'react';
import '../style/App.css';
import axios from 'axios';

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

export default WeatherSearch;