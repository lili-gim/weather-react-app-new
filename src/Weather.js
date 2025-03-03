import React from "react";
import "./Weather.css";
import { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeahterForecast from "./WeatherFoercast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      precipitation: 0,
      city: response.data.city,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      coordinates: response.data.coordinates,
    });
  }

  function search() {
    const apiKey = "c20161a98fff44a06b23236e2obd0t3b";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                onChange={handleCityInput}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInfo info={weatherData} />
        <WeahterForecast coord={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
