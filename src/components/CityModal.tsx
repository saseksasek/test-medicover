import { FC, useState } from "react";
import { CitySelector } from "./CitySelector";
import { Button, Modal } from "@mui/material";
import { useCookies } from "react-cookie";
import { CountryProps } from "../types/CountryProps";

export const CityModal: FC<{
  openCountrySelector: boolean;
  setOpenCountrySelector: (e: boolean) => void;
}> = ({ openCountrySelector, setOpenCountrySelector }) => {
  const [country, setCountry] = useState<CountryProps | null>(null);
  const [cookies, setCookie] = useCookies(["city"]);

  const onSaveClick = () => {
    if (country) {
      setCookie("city", country);
      setOpenCountrySelector(false);
    } else {
      console.log("city cannot be null");
      alert("Kérlek válassz egy várost!");
    }
  };

  return (
    <Modal
      open={openCountrySelector}
      onClose={() => {
        if (cookies.city) {
          setOpenCountrySelector(false);
        }
      }}
    >
      <div className="modal-content">
        <div>Válassz egy várost</div>
        <CitySelector country={country} setCountry={setCountry} />
        <Button variant="contained" onClick={onSaveClick}>
          Mentés
        </Button>
        {cookies.city && (
          <Button onClick={() => setOpenCountrySelector(false)}>Bezár</Button>
        )}
      </div>
    </Modal>
  );
};
