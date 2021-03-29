import React from "react";
import "../styles/Cards.css";

function Cards(props) {
  return (
    <div className="cards-container">
      {props.countryData.map((country) => {
        return (
          <div
            key={country.id}
            id={country.id}
            className="card"
            onClick={props.handleClick}
          >
            <img
              id={country.id + "-img"}
              src={country.flag}
              alt={country.name + " Flag"}
            />
            <p id={country.id + "-text"}>{country.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
