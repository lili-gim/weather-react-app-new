import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeahterForecast(props) {
  console.log(props);
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "c20161a98fff44a06b23236e2obd0t3b";
  let latitude = props.coord.latitude;
  let longitude = props.coord.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div>
            <span className="WeatherForecast-temperature-max">7°</span>
            <span className="WeatherForecast-temperature-min">-1°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
