import  React, { useState } from "react";

function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);

  function randomPokemon({ newPokemon }) {
      return ({ newPokemon }[Math.floor.random() * props.newPokemon.length]);
  }

  function catchPokemon() {
    setCaught(caught.concat(randomPokemon()));
  }

  return (
    <div>
      <p>
        Caught {randomPokemon} Pokemon on {props.date}
      </p>
      <ul>
        {props.newPokemon.map((item, index) => {
          return (
          <li key={index}>{item}</li>
          );
        })}
      </ul>
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </div>
  );
}

export default CaughtPokemon;

