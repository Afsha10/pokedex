import React from "react";

const Logo = (props) => {

  console.log(props);
  return (
    <div>
      <h1>{props.appName}</h1>
      <img onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="of a bird"
      />
    </div>
  );
};

export default Logo;