import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeahterForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecastData.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecastData.time * 1000);
    let day = date.getDate();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div className="WeatherForecatDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.forecastData.condition.icon} size={36} />
      <div>
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
