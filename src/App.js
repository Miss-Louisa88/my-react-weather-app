import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  ///Get access to the input value
  let [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="App">
      <header>
        <form className="SearchForm" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="SearchInput"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="SearchButton" />
        </form>
      </header>
      <main>
        <div className="WeatherData">
          <div>
            <h1 className="WeatherCity">{city}</h1>
            <p className="WeatherDetails">
              <span className="Time"></span>
              <span className="Description"></span>
              <br />
              Humidity: 8 % <strong className="Humidity"></strong>, Wind: 88
              km/hr
              <strong className="WindSpeed"></strong>
            </p>
          </div>
          <div className="WeatherAppTemperatureContainer">
            <div className="Icon">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="darkorange"
                size={50}
                animate={true}
              />
            </div>
            <div className="WeatherTemperature">28</div>
            <div className="WeatherUnit">°C</div>
          </div>
        </div>
        <div className="WeatherForecast"></div>
        <Weather />
      </main>

      <footer>
        This project was coded by
        <a
          href="https://github.com/Miss-Louisa88"
          target="_blank"
          rel="noreferrer"
        >
          : Louise Adera
        </a>
        , is
        <a
          href="https://github.com/Miss-Louisa88/my-react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        , and
        <a
          href="https://louisereactjsweather.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
