import React, { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
import shuffle from "../shuffle";
import countries from "../data/countries";

function App() {
  const [countryData, setCountryData] = useState(shuffle(countries));
  const [clickedFlags, setClickedFlags] = useState([]);

  function handleClick(event) {
    storeClickedFlag(event.target.id);
    shuffleCountries();
  }

  function storeClickedFlag(countryId) {
    const newClickedFlags = clickedFlags.concat(countryId);
    setClickedFlags(newClickedFlags);
    console.log(clickedFlags);
  }

  function shuffleCountries() {
    const shuffledCountryData = [...shuffle(countryData)];
    setCountryData(shuffledCountryData);
  }

  return (
    <div className="App">
      <Header />
      <Cards countryData={countryData} handleClick={handleClick} />
      <Footer />
    </div>
  );
}

export default App;
