import React from "react";
import "../styles/GameOver.css";

function GameOver(props) {
  return (
    <div
      className="GameOver"
      style={props.isGameOver ? { display: "flex" } : { display: "none" }}
    >
      {props.isGameOver ? (
        <div>
          <p>
            {props.currentScore === 20
              ? `Congratulations! You got ${props.currentScore} points and won the game!`
              : `You got ${props.currentScore} points.`}
          </p>
          <button type="button" onClick={props.playAgain}>
            Play Again
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default GameOver;
