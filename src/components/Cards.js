import "../styles/card.css";
import flagData from "../data/data.js";

function Cards() {
  return (
    <div className="cards-container">
      {flagData.map((country) => {
        return (
          <div key={country.id} id={country.id} className="card">
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
