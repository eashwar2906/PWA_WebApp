import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "4f33836a123e666de84b9bf491f059a2";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metrics",
      APPID: API_Key,
    },
  });
  return data;
};
