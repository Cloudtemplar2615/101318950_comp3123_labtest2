# 101318950_comp3123_labtest2 – Weather App

React weather application for COMP 3123 Week 13 Lab Test 2.

The app lets the user search by city name and shows:
- Current temperature (°C)
- Feels-like temperature
- Humidity
- Wind speed
- Weather icon and description
- Recent cities history (last 5 searches)

## Tech Stack

- React (Create React App)
- JavaScript (ES6+)
- Fetch API
- OpenWeatherMap Current Weather API
- 
 ## API Used

- OpenWeatherMap Current Weather API (Current weather data)
  - Endpoint: `https://api.openweathermap.org/data/2.5/weather`
  - Example: `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=YOUR_API_KEY&units=metric`


## How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/Cloudtemplar2615/101318950_comp3123_labtest2.git
   cd 101318950_comp3123_labtest2

Install dependencies:npm install
Create .env in the project root:REACT_APP_WEATHER_KEY=your_openweather_api_key_here
Start the app:npm start

## Deployed Link
https://101318950-comp3123-labtest2.vercel.app/

