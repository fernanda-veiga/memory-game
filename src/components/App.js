import flagData from "../data/data.js";
console.log(flagData);

function App() {
  return (
    <div className="App">
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

export default App;
