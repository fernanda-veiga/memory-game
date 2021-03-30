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
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleClick(event) {
    const country = event.target.id;

    if (clickedFlags.includes(country)) {
      resetGame();
    } else {
      storeClickedFlag(country);
      changeCurrentScore();
    }
    shuffleCountries();
  }

  function resetGame() {
    changeHighScore();
    setClickedFlags([]);
    setCurrentScore(0);
  }

  function storeClickedFlag(countryId) {
    const newClickedFlags = clickedFlags.concat(countryId);
    setClickedFlags(newClickedFlags);
    console.log(clickedFlags);
  }

  function changeCurrentScore() {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);
    console.log(currentScore);
  }

  function changeHighScore() {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }

  function shuffleCountries() {
    const shuffledCountryData = [...shuffle(countryData)];
    setCountryData(shuffledCountryData);
  }

  return (
    <div className="App">
      <Header currentScore={currentScore} highScore={highScore} />
      <Cards countryData={countryData} handleClick={handleClick} />
      <Footer />
    </div>
  );
}

export default App;
