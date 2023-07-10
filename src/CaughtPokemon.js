import  React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  // const [randomPokemon, setRandomPokemon] = useState([]);

  function randomPokemon() {
    const randomElement = props.newPokemon[Math.floor(Math.random() * props.newPokemon.length)];
    console.log(randomElement);
    return randomElement;
  }

  function catchPokemon() {
    console.log(caught);
    setCaught(caught.concat(randomPokemon()));
  }

  function getLastPokemon() {
    return caught[caught.length - 1];
  }

  return (
    <div>
      <p>
        Caught {getLastPokemon()} Pokemon on {props.date}
      </p>
      <ul>
        {caught.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </div>
  );
};

export default CaughtPokemon;

