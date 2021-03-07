import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1 id="current-city">{props.city}</h1>
      <ul className="daily-conditions">
        <li className="last-update">Last updated: Sunday, 20:56</li>
        <span id="current-date"></span>
        <li id="description">Clear sky</li>
      </ul>
      <div className="row">
        <div className="col-12 col-sm-6 weather-conditions mb-3 mb-sm-0">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="Cloudy icon"
            className="weather-icon"
            id="icon"
          />
          <span className="temperature" id="degrees">
            5℃
          </span>
          <span className="units">
            <a href="#" class="active" id="celsius">
              ℃{" "}
            </a>
          </span>
          |
          <span className="units">
            <a href="#" id="fahrenheit">
              ℉
            </a>
          </span>
        </div>
        <div className="col-6">
          <ul className="conditions">
            <li>
              Humidity: 85%<span id="humidity-value"></span>
            </li>
            <li>
              Wind: 5 m/s<span id="wind-value"></span>
            </li>
            <li>
              Air pressure: 1010 hPa<span id="pressure-value"></span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="consecutive-days">
        Check the forecast for the upcoming hours
      </h2>
      <div className="row weather-forecast" id="forecast"></div>
    </div>
  );
}
