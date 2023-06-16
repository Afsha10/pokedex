import react from "react";

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability) => {
          return <li key={ability}>{ability}</li>;
        })}
      </ul>
    </div>
  );
};

export default BestPokemon;

