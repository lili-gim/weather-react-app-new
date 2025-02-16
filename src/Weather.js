import React from "react";
import "./Weather.css";
import { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      precipitation: 0,
      city: response.data.main.name,
      wind: response.data.wind.speed,
      humiidity: response.data.main.humiidity,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
      description: response.data.weather[0].description,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-7">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                ></img>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>{" "}
                <span>°C | °F</span>
              </div>
              <div className="col-5">
                <ul>
                  <li>Precipitation: {weatherData.precipitation}</li>
                  <li>Humidity: {weatherData.humiidity}</li>
                  <li>Wind: {weatherData.wind}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-6 text-end">
            <h2>Weahter</h2>
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li class="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c20161a98fff44a06b23236e2obd0t3b";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).tnen(handleResponse);

    return "Loading...";
  }
}
