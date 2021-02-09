// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

let pokedex = document.getElementById("pokedex");
console.log(pokedex);
let url = "https://pokeapi.co/api/v2/pokemon/";
let fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 898; i++) {
    console.log(url + i);
    promises.push(fetch(url + i).then((res) => res.json()));
  }
  Promise.all(promises).then(results => {
    const pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_shiny'],
      type: data.types.map((type) => type.type.name).join(',')
    }));
    displayPokemon(pokemon);
    
  });
    
};


let displayPokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = pokemon.map(
    (pokeman) => `
          <li class = "card">
                <img src= "${pokeman.image}" />
                <h2> ${pokeman.id}. ${pokeman.name}</h2>
                <p>Type: ${pokeman.type}</p>
           </li>
      `).join('');
  pokedex.innerHTML = pokemonHTMLString;
  return cardColor();

};

function cardColor(){
  if (pokeman.type === 'grass') {
    document.getElementsByClassName("card")[0].style.backgroundColor="blue";
  }
};

fetchPokemon();