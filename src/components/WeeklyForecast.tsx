import { FC } from "react";
import { getDayName } from "../helpers/getDayName";
import { LineChart } from "@mui/x-charts/LineChart";
import { getRainText } from "../helpers/getRainText";
import { getAllDays } from "../helpers/getAllDays";
import { WeatherProps } from "../types/WeatherProps";

export const WeeklyForecast: FC<{
  weather: WeatherProps;
}> = ({ weather }) => (
  <div className="days-list">
    <div className="days-title">7 napos előrejelzés</div>
    {weather.days.map((day: any, index: number) => (
      <div key={index} className="days-list-element">
        <div className="days">{getDayName(day)}</div>
        <div className="rain-probality">
          {getRainText(weather.rain.at(index) ?? 0)}
        </div>
        <div className="celsius">
          {weather.min.at(index)} °C / {weather.max.at(index)} °C
        </div>
      </div>
    ))}
    <div className="chart-container">
      <LineChart
        series={[{ data: weather.max }]}
        xAxis={[
          {
            data: getAllDays(weather.days),
            scaleType: "point",
          },
        ]}
      ></LineChart>
    </div>
  </div>
);
