import { useEffect, useState } from "react";
import "./App.css";
import { useCookies } from "react-cookie";
import axios from "axios";
import { TodayWeather } from "./components/TodayWeather";
import { WeeklyForecast } from "./components/WeeklyForecast";
import { GetWeatherTypeText } from "./helpers/getWeatherTypeText";
import { WeatherProps } from "./types/WeatherProps";

function App() {
  const [weather, setWeather] = useState<WeatherProps | undefined>();

  const [cookies] = useCookies(["city"]);

  useEffect(() => {
    if (!cookies.city) {
      return;
    }

    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${cookies.city?.latitude}&longitude=${cookies.city?.longitude}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=GMT`
      )
      .then((response) => {
        const data = response.data;

        setWeather({
          temperature: data.current.temperature_2m,
          weather_code: GetWeatherTypeText(data.current.weather_code),
          days: data.daily.time,
          rain: data.daily.rain_sum,
          max: data.daily.temperature_2m_max,
          min: data.daily.temperature_2m_min,
        });
      })
      .catch((error) => {
        console.error("get 7 days api error: ", error);
        alert("Something went wrong!");
      });
  }, [cookies.city]);

  return (
    <div className="App">
      <div className="container">
        <TodayWeather weather={weather} />
        {weather && <WeeklyForecast weather={weather} />}
      </div>
      <div className="my-name">Rétfalvi Kristóf</div>
    </div>
  );
}

export default App;
