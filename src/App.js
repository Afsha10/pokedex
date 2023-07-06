import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
    const abilities = ["Anticipation", "Adaptability", "Run-Away"];
    const newPokemon = ["Ditto", "Spearow", "Pikachu", "Eevee", "Butterfree", "Bulbasaur", "Charmander", "Squirtle", "Wartortle"];
    const date = new Date().toLocaleDateString();
    function logWhenClicked() {
      console.log("Hello My Puddings!");
    }
  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities = {abilities}/>
      <CaughtPokemon newPokemon={newPokemon} date = {date} />
    </div>
  );
}

export default App;
