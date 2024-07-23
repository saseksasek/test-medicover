type WeatherCodesProps = {
    [key: number]: string;
};

const weatherCodes: WeatherCodesProps = {
    0: "Derült égbolt",
    1: "Főleg derült",
    2: "Részben felhős",
    3: "Felhős",
    45: "Köd",
    48: "Lerakódó zúzmarás köd",
    51: "Szitálás: Gyenge intenzitás",
    53: "Szitálás: Mérsékelt intenzitás",
    55: "Szitálás: Erős intenzitás",
    56: "Ónos szitálás: Gyenge intenzitás",
    57: "Ónos szitálás: Erős intenzitás",
    61: "Eső: Enyhe intenzitás",
    63: "Eső: Mérsékelt intenzitás",
    65: "Eső: Erős intenzitás",
    66: "Ónos eső: Gyenge intenzitás",
    67: "Ónos eső: Erős intenzitás",
    71: "Hóesés: Enyhe intenzitás",
    73: "Hóesés: Mérsékelt intenzitás",
    75: "Hóesés: Erős intenzitás",
    77: "Hószemcsék",
    80: "Záporeső: Enyhe intenzitás",
    81: "Záporeső: Mérsékelt intenzitás",
    82: "Záporeső: Heves intenzitás",
    85: "Hózápor: Enyhe intenzitás",
    86: "Hózápor: Erős intenzitás"
};

export const GetWeatherTypeText = (code: number) => {
    return weatherCodes[code] || "Ismeretlen időjárás kód";
}