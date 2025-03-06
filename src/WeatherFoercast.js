import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import WeahterForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeahterForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  console.log(props);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeahterForecastDay forecastData={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "c20161a98fff44a06b23236e2obd0t3b";
    let latitude = props.coord.latitude;
    let longitude = props.coord.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
