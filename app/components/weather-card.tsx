import React from "react";
import {
  formatCamelCase,
  formatDate,
  formatTime,
} from "../utils/util-functions";
import { ImArrowUp } from "react-icons/im";
import { IoMoonSharp, IoRainy, IoSunny } from "react-icons/io5";
import { IoMdCloudyNight } from "react-icons/io";
import { BsCloudFog2Fill, BsCloudsFill } from "react-icons/bs";
import { FaCloudMoonRain, FaLocationDot } from "react-icons/fa6";
import { GiSnowflake2, GiWaterDrop } from "react-icons/gi";
import {
  WiDayHaze,
  WiDayThunderstorm,
  WiFog,
  WiNightAltThunderstorm,
  WiNightFog,
} from "react-icons/wi";
import { LuWind } from "react-icons/lu";

export interface WeatherCardProps {
  name?: string;
  weather?: { main: string; description: string }[];
  main?: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind?: {
    speed: number;
    deg: number;
  };
  sys?: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  dt?: number;
  timezone?: number;
  cod: number;
}

const WeatherCard = (props: WeatherCardProps) => {
  const { name, weather, main, wind, sys, dt, timezone } = props || {};
  const weatherType = weather[0]?.main ?? "";
  const description = weather[0]?.description ?? "";
  const temp = main?.temp ?? 0;
  const feels_like = main?.feels_like ?? 0;
  const humidity = main?.humidity ?? 0;
  const speed = wind?.speed ?? 0;
  const country = sys?.country ?? "";
  const sunrise = sys?.sunrise ?? 0;
  const sunset = sys?.sunset ?? 0;
  const deg = wind?.deg ?? 0;
  const date = dt ? formatDate(dt) : "";
  const time = dt ? formatTime(dt, timezone) : "";

  const selectWeatherIcon = (weatherType: string): React.ReactNode => {
    if (weatherType === "clear") {
      if (dt > sunrise && dt < sunset) {
        return <IoSunny />;
      } else {
        return <IoMoonSharp />;
      }
    } else if (weatherType === "clouds") {
      if (dt > sunrise && dt < sunset) {
        return <BsCloudsFill />;
      } else {
        return <IoMdCloudyNight />;
      }
    } else if (weatherType === "rain" || weatherType === "drizzle") {
      if (dt > sunrise && dt < sunset) {
        return <IoRainy />;
      } else {
        return <FaCloudMoonRain />;
      }
    } else if (weatherType === "thunderstorm") {
      if (dt > sunrise && dt < sunset) {
        return <WiDayThunderstorm />;
      } else {
        return <WiNightAltThunderstorm />;
      }
    } else if (weatherType === "mist") {
      if (dt > sunrise && dt < sunset) {
        return <WiFog />;
      } else {
        return <WiNightFog />;
      }
    } else if (weatherType === "snow") return <GiSnowflake2 />;
    else if (weatherType === "haze" || weatherType === "smoke") {
      if (dt > sunrise && dt < sunset) {
        return <WiDayHaze />;
      } else {
        return <BsCloudFog2Fill />;
      }
    }
  };

  return (
    <div
      className={`weather-card ${
        dt > sunrise && dt < sunset ? "day" : "night"
      }`}
      style={{ "--wind-direction": deg + "deg" }}
      id={weatherType.toLowerCase()}
    >
      <div className="info-container">
        <div id="location">
          <h3>
            <FaLocationDot />
            {`${name}, ${country === "GB" ? "UK" : country}`}
          </h3>
        </div>
        <div id="date">
          <p>{date}</p>
        </div>
        <div id="time">
          <p>{time}</p>
        </div>
      </div>
      <div className="weather-container">
        <div className="weather-icon">
          {selectWeatherIcon(weatherType.toLowerCase())}
        </div>
        <h2>{formatCamelCase(description)}</h2>
        <div className="temp-container">
          <div id="temp">
            <h1>
              {Math.round(temp)}
              {"\u00b0"}C
            </h1>
          </div>
          <div id="feels-like">
            <p>
              Feels Like {Math.round(feels_like)}
              {"\u00b0"}C
            </p>
          </div>
        </div>
      </div>
      <div className="humidity-container">
        <h3 className="icon-container">
          <GiWaterDrop />
        </h3>
        <div id="humidity" className="text-container">
          <h3>{humidity}%</h3>
          <p className="title">Humidity</p>
        </div>
      </div>
      <div className="wind-container">
        <h3 className="icon-container">
          <LuWind />
        </h3>
        <div className="text-container">
          {/* <div id="wind-direction">
            <p>
              <ImArrowUp id="direction-arrow" />
            </p>
          </div> */}
          <div id="wind-speed">
            <h3>
              <span className="wind-speed text">{Math.round(speed)} km/h</span>
              <ImArrowUp id="direction-arrow" />
            </h3>
            <p className="wind-speed">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
