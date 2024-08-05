import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  ///Display the Weekdays/ City Name on Screen
  /// Parsing the days ✅
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri"];
  return (
    <div className="ForecastDay">
      <ul>
        {days.map(function (day, index) {
          return (
            <li key={index}>
              <div className="ForecastDate"> {day}</div>

              <ReactAnimatedWeather
                icon="RAIN"
                color="blue"
                size={50}
                animate={true}
              />
              <div className="ForecastTemperatures">
                <div className="ForecastTemperature">
                  <strong>28ºC</strong>
                </div>
                <div className="ForecastTemperature">8ºC</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
