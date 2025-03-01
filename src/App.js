import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />

        <footer>
          This project was coded by Lili Gim and is{" "}
          <a
            className="text-decoration-none"
            href="https://github.com/lili-gim/weather-react-app-new"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            className="text-decoration-none"
            href="https://2day-weather.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
