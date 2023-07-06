import  React, {useState} from "react";

function CaughtPokemon(props) {
  const [caught, setCaught] = useState(0);

  function catchPokemon() {
    setCaught((caught) => {
      return caught + 1;
    });
  }

  return (
    <div>
      <p>
        Caught {caught} Pokemon on {props.date}
      </p>
      <button onClick={catchPokemon}>Click me</button>
    </div>
  );
}

export default CaughtPokemon;

