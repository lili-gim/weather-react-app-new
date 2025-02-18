import React from "react";

export default function WeatherInfo() {
  <div className="WeatherInfo">
    <h1>{weatherData.city}</h1>
    <div className="row">
      <div className="col-6">
        <div className="row">
          <div className="col-7">
            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>{" "}
            <span>°C | °F</span>
          </div>
          <div className="col-5">
            <ul>
              <li>Precipitation: {weatherData.precipitation}</li>
              <li>Humidity: {weatherData.humidity}%</li>
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
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
      </div>
    </div>
  </div>;
}
