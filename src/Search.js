import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [info, setInfo] = useState(" ");
  let [text, setText] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `5c3ee28f0359086dde5610bde74e2870`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setText(<h3>Currently in {city}:</h3>);
    setInfo(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}℃</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed} m/s</li>
        <li>
          {" "}
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="weather"
          />
        </li>
      </ul>
    );
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type in the city"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      {text}
      {info}
    </div>
  );
}
