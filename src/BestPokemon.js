import React from "react";

const BestPokemon = (props) => {

  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((ability) => {
          return <li key={ability}>{ability}</li>;
        })}
      </ul>
    </div>
  );
};

export default BestPokemon;

