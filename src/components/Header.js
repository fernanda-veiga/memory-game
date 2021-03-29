import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <h1>Flags Memory Game</h1>
      <div className="score">
        <p>SCORE: 0</p>
        <p>HIGH SCORE: 0</p>
      </div>
    </header>
  );
}

export default Header;
