"use client";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import WeatherCard, { WeatherCardProps } from "./components/weather-card";

const api_key = "4996a3a183b4b8a22ffe840cde5f5d2d";
const defaultCity: string = "Toronto";

export default function WeeatherApp() {
  const [data, setData] = useState<null | WeatherCardProps>(null);
  const [location, setLocation] = useState<string>("");
  const [found, setFound] = useState<boolean>(true);

  useEffect(() => {
    search(defaultCity);
  }, []);

  const search = async (cityName: string) => {
    if (cityName !== "") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${api_key}`;
      const response = await fetch(url);
      const weatherData: WeatherCardProps = await response.json();

      if (weatherData.cod !== 200) {
        //If it returns anything other than status 200
        setFound(false);
      } else {
        setData(weatherData);
        if (!found) {
          setFound(true);
        }
      }
      setLocation("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      search(location);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <div className="weather-page">
      <div className="search-bar-container">
        <input
          type="search"
          name="search"
          className="search-bar"
          id="search-bar"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={location}
        />
        <button className="search-button" onClick={() => search(location)}>
          <p>
            <FaMagnifyingGlass />
          </p>
        </button>
      </div>
      {found && data ? <WeatherCard {...data} /> : <h2>City can't be found</h2>}
    </div>
  );
}
