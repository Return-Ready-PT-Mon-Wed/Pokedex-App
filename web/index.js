let pokeValue = (pokeData) => {
  let name = pokeData.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  let types = pokeData.types.map((type) => type.type.name).join(", ");
  let sprites = pokeData.sprites.front_default;
  let id = pokeData.id;
};
/*
const pokecolors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
*/

const getPokemon = (start, pokeId) => {
  const allPokes = [];
  for (let i = start; i <= pokeId; i++) {
    allPokes.push(
      fetch(`http://localhost:5000/pokemon${i}`).then((res) => res.json())
    );
  }
  return Promise.all(allPokes);
};

const createPokeCard = ({ name, types, sprites, id }) => {
  document.querySelector(".card-container").innerHTML += `<div>
                            <h3>${name}</h3>
                            <h4>${id}</h4>
                            <h5>${types}</h5>
                            <h6>color</h6>
                            <img src="${sprites}">
                        </div>-->`;
};
getPokemon(1, 150)
  .then((data) => data.map(pokeValue))
  .then((data) => data.forEach(createPokeCard));
