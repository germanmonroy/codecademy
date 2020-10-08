import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";
const background = (
  <img className="background" src="/images/ocean.jpg" alt="ocean" />
);

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const selectedAnimal = animals[e.target.alt];
  const random = Math.floor(Math.random() * selectedAnimal.facts.length);
  document.getElementById("fact").innerHTML = selectedAnimal.facts[random];
}

const showBackground = true;

const animalFacts = (
  <div>
    {showBackground && background}
    <div className="animals">{images}</div>
    <h1>{title ? "" : "Click an animal for a fun fact"}</h1>
    <p id="fact"></p>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
