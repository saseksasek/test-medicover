import { FC, useState } from "react";
import { CityModal } from "./CityModal";
import { useCookies } from "react-cookie";
import { WeatherProps } from "../types/WeatherProps";

export const TodayWeather: FC<{
  weather?: WeatherProps;
}> = ({ weather }) => {
  const [cookies] = useCookies(["city"]);

  const [openCountrySelector, setOpenCountrySelector] = useState(
    cookies.city ? false : true
  );

  return (
    <div className="today-weather">
      {weather && (
        <div>
          <div
            className="city-button"
            onClick={() => setOpenCountrySelector(true)}
          >
            {cookies.city?.label ?? "Válassz várost"}
          </div>
          <div className="today-celsius">{weather?.temperature + " °C"}</div>
          <div>{weather?.weather_code}</div>
        </div>
      )}
      <CityModal
        openCountrySelector={openCountrySelector}
        setOpenCountrySelector={setOpenCountrySelector}
      />
    </div>
  );
};
