import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ShowResult from "./ShowResult";
import CitiesWeather from "./CitiesWeather";

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [weather, setWeather] = useState([]);
  const baseUrl = "https://restcountries.com";
  const url = `${baseUrl}/v3.1/all`;
  useEffect(() => {
    axios(url)
      .then((res) => res.data)
      .then((data) => {
        // console.log(data);
        setCountries(data);
      });
  }, []);

  const api_key = "1e6c8d372993c589a63cb957b9de51e2";
  useEffect(() => {
    axios(
      `http://api.openweathermap.org/data/2.5/weather?q=nigeria&appid=${api_key}%&unit=metrics`
    )
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setWeather(data);
      });
  }, []);
  const handleSearch = (e) => {
    setFiltered(e.target.value);
  };
  const filterCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filtered)
  );

  return (
    <div>
      Find countries
      <input
        type="search"
        name={filtered}
        placeholder="search countries"
        onChange={handleSearch}
      />
      <ShowResult filterCountries={filterCountries} />
      <CitiesWeather />
    </div>
  );
}

export default App;
