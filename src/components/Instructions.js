import React from "react";
import "../styles/Instructions.css";

function Instructions() {
  return (
    <div className="instructions">
      <p>
        Click on a flag to get points, but don't click on the same flag more
        than once.
      </p>
      <p>If you get 20 points, you win!</p>
    </div>
  );
}

export default Instructions;
