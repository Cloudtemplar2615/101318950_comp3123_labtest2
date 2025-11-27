import React from "react";

function WeatherCard({ weather }) {
  if (!weather) return null;

  const {
    name,
    main: { temp, feels_like, humidity } = {},
    weather: weatherArr = [],
    wind = {},
  } = weather;

  const description = weatherArr[0]?.description;
  const icon = weatherArr[0]?.icon;

  const iconUrl = icon
    ? `https://openweathermap.org/img/wn/${icon}@2x.png`
    : "";

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      {iconUrl && <img src={iconUrl} alt={description} />}
      <p className="temp">{Math.round(temp)}°C</p>
      <p className="desc">{description}</p>
      <div className="details">
        <p>Feels like: {Math.round(feels_like)}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind: {wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
