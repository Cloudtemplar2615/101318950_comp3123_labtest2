import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const API_BASE = "https://api.openweathermap.org/data/2.5/weather";

function App() {
  const [city, setCity] = useState("Toronto");
  const [query, setQuery] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]); // 👈 new

  const apiKey = process.env.REACT_APP_WEATHER_KEY;

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `${API_BASE}?q=${cityName}&appid=${apiKey}&units=metric`
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error fetching weather");
      }

      setWeather(data);
      setCity(data.name);

      // 👇 update search history (max 5 items, most recent first)
      setHistory((prev) => {
        const newCity = data.name;
        const lower = newCity.toLowerCase();

        // remove existing entry if already in list
        let updated = prev.filter((c) => c.toLowerCase() !== lower);
        // add to front
        updated.unshift(newCity);
        // keep only first 5
        return updated.slice(0, 5);
      });
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // load initial city once
  useEffect(() => {
    fetchWeather(city);
    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchWeather(query.trim());
    }
  };

  const handleHistoryClick = (cityName) => {
    setQuery(cityName);
    fetchWeather(cityName);
  };

  return (
    <div className="app">
      <h1>Weather App – 101318950</h1>

      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && <WeatherCard weather={weather} />}

      {history.length > 0 && (
        <div className="history">
          <h3>Recent cities</h3>
          <ul>
            {history.map((c) => (
              <li key={c}>
                <button type="button" onClick={() => handleHistoryClick(c)}>
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <footer className="footer">
        Built by Fredrich Tan (101318950) • COMP3123 Lab Test 2
      </footer>
    </div>
  );
}

export default App;
