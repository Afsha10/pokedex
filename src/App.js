import React from "react";

const Logo = () => {
  const appName = "Afsha's Pokedox";
  return (
    <div>
      <h1>{appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="of a bird"
      />
    </div>
  );
};

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {
          abilities.map((ability) => {
            return <li key={ability}>{ability}</li>;
          })
        }
      </ul>
    </div>
  );
};

function CaughtPokemon() {
  const date = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {date}</p>;
}

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
