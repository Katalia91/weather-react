import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`Temperature in${response.data.name} is ${response.data.main.temp}`);
  }

  let apiKey = `5c3ee28f0359086dde5610bde74e2870`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);

  return <h2>Weather</h2>;
}
