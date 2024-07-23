import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { CountryProps } from "../types/CountryProps";

export const CitySelector: FC<{
  setCountry: (selectedCountry: CountryProps) => void;
  country?: CountryProps | null;
}> = ({ setCountry, country }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${inputValue}&count=10&language=hu&format=json`
        )
        .then((response) => {
          if (!response.data.results) {
            return;
          }

          const countries = response.data.results.map((e: any) => {
            return {
              label: e.name,
              latitude: e.latitude,
              longitude: e.longitude,
              country: e.admin1,
            };
          });

          const countriesWithoutDuplicates = countries.reduce(
            (newList: any[], current: { label: any }) => {
              if (!newList.some((item) => item?.label === current?.label)) {
                newList.push(current);
              }
              return newList;
            },
            []
          );

          setData(countriesWithoutDuplicates);
        })
        .catch((error) => {
          console.log("api call error: ", error);
        });
    }, 500);

    return () => clearTimeout(getData);
  }, [inputValue]);

  return (
    <Autocomplete
      value={country?.city || null}
      onChange={(event: any, newValue: any) => {
        setCountry(newValue);
      }}
      disablePortal
      options={data}
      sx={{ width: 300 }}
      onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
      renderInput={(params) => (
        <TextField {...params} label="Kezdjen el gépelni" />
      )}
    />
  );
};
