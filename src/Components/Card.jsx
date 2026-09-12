import { useState } from "react";
import { Pokedex } from "https://cdn.jsdelivr.net/gh/pokeapi/pokeapi-js-wrapper@2.0.2/src/index.js";
const pokedex = await Pokedex.init();

export function Card({ name, onClick }) {
  const [clicked, setClicked] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  pokedex.getPokemonByName(name).then((pokemon) => {
    setImgSrc(pokemon.sprites.front_default);
  });

  return (
    <button onClick={onClick}>
      <img src={imgSrc} />
      <h3>{name}</h3>
    </button>
  );
}
