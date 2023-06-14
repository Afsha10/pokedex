import React from "react";

const Logo = () => {
  return (
    <div>
      <h1>Welcome to the Pokedex</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="of a bird"
      />
    </div>
  );
};

const BestPokemon = () => {
  return <p>My favourite Pokemon is Squirtle</p>;
};

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
    </div>
  );
}

export default App;
