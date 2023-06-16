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

export default Logo;