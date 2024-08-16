import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Temperature from "./Temperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherData">
      <div>
        <h1 className="WeatherCity">{props.data.city}</h1>
        <p className="WeatherDetails">
          <span className="Time">{props.data.date}</span>
          <span className="Description">{props.data.description}</span>
          <br />
          Humidity:
          <strong className="Humidity">{props.data.humidity} %</strong>, Wind:
          <strong className="WindSpeed">{props.data.wind} Km/hr</strong>
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
        <div>
          <Temperature celcius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
