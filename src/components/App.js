import React, { useState } from "react";
import Cards from "./Cards.js";
import shuffle from "../shuffle.js";
import countries from "../data/data.js";

function App() {
  const [countryData, setCountryData] = useState(shuffle(countries));

  function shuffleCountries() {
    const shuffledCountryData = [...shuffle(countryData)];
    setCountryData(shuffledCountryData);
  }

  return (
    <div className="App">
      <Cards countryData={countryData} shuffleCountries={shuffleCountries} />
    </div>
  );
}

export default App;
