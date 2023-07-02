import React from "react";
import { useState } from "react";
const ShowResult = ({ filterCountries }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {
        <div>
          {filterCountries.length > 10 ? (
            <p>Too many matches</p>
          ) : show ? (
            filterCountries.length === 1 ? (
              filterCountries.map((country) => (
                <div key={country.capital}>
                  <h2>{country.name.common}</h2>
                  <p> Capital: {country.capital}</p>
                  <p>Area: {country.area}</p>
                  <p>Population: {country.population}</p>
                  <h3>Languages:</h3>
                  <ul>
                    {Object.values(country.languages).map((language) => (
                      <li key={country.name.common}>{language}</li>
                    ))}
                  </ul>
                  <img src={country.flags.png} alt="flag" className="flag" />
                </div>
              ))
            ) : (
              "specify further"
            )
          ) : (
            filterCountries.map((country) => (
              <h2 key={country.capital}>
                {country.name.common}
                <button onClick={(e) => setShow(true)}>show</button>
              </h2>
            ))
          )}
        </div>
      }
    </div>
  );
};
export default ShowResult;
