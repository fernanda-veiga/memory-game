import React from "react";
//import "../styles/Header.css";

function GameOver(props) {
  return (
    <div className="GameOver">
      {props.isGameOver ? (
        <div>
          <p>
            {props.currentScore === 20
              ? `Congratulations! You did ${props.currentScore} points and won the game!`
              : `You did ${props.currentScore} points.`}
          </p>
          <button type="button" onClick={props.playAgain}>
            PLAY AGAIN
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default GameOver;
