import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-7">
              <WeatherIcon code={props.info.icon} />
              <span className="temperature">
                {Math.round(props.info.temperature)}
              </span>{" "}
              <span>°C | °F</span>
            </div>
            <div className="col-5">
              <ul>
                <li>Precipitation: {props.info.precipitation}</li>
                <li>Humidity: {props.info.humidity}%</li>
                <li>Wind: {props.info.wind}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-6 text-end">
          <h2>Weahter</h2>
          <ul>
            <li>
              <FormattedDate date={props.info.date} />
            </li>
            <li className="text-capitalize">{props.info.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
