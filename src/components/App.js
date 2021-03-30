import React, { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Instructions from "./Instructions";
import Cards from "./Cards";
import GameOver from "./GameOver";
import Footer from "./Footer";
import shuffle from "../shuffle";
import countries from "../data/countries";

function App() {
  const [countryData, setCountryData] = useState(shuffle(countries));
  const [clickedFlags, setClickedFlags] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

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
    setIsGameOver(true);
    changeHighScore();
    setClickedFlags([]);
  }

  function storeClickedFlag(countryId) {
    const newClickedFlags = clickedFlags.concat(countryId);
    setClickedFlags(newClickedFlags);
  }

  function changeCurrentScore() {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);
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

  function playAgain() {
    setIsGameOver(false);
    setCurrentScore(0);
  }

  return (
    <div className="App">
      <Header currentScore={currentScore} highScore={highScore} />
      <Instructions />
      <Cards countryData={countryData} handleClick={handleClick} />
      <GameOver
        isGameOver={isGameOver}
        playAgain={playAgain}
        currentScore={currentScore}
      />
      <Footer />
    </div>
  );
}

export default App;
