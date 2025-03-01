import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeahterForecast() {
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
