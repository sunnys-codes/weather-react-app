import React from "react";
import axios from "axios";

export default function Weather() {

  function handleResponse(response) {
    alert(
        `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    )
  }

    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Weather</h2>
};
