import React, { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
import shuffle from "../shuffle";
import countries from "../data/countries";

function App() {
  const [countryData, setCountryData] = useState(shuffle(countries));

  function shuffleCountries() {
    const shuffledCountryData = [...shuffle(countryData)];
    setCountryData(shuffledCountryData);
  }

  return (
    <div className="App">
      <Header />
      <Cards countryData={countryData} shuffleCountries={shuffleCountries} />
      <Footer />
    </div>
  );
}

export default App;
