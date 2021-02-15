const express = require("express");
const app = express();
const cors = require("cors"); // add cors
const pokeId = 150;
const path = require("path");
const web = path.join(__dirname, "web");
const fetch = require("node-fetch"); // npm install node-fetch
const port = 5000;
//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;

//global.document = new JSDOM(html).window.document;

const pokeColors = {
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

app.use(cors());

app.get("/Pokemon", function (req, res) {
  res.sendFile(path.join(web, "index.html"));
});

const allPokemon = async () => {
  for (let i = 1; i <= pokeId; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  var requestUri = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(requestUri)
    .then((response) => {
      return response.json();
    })
    .then((pokemon) => {
      const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      const types = pokemon.types.map((type) => type.type.name).join(", ");
      const sprites = pokemon.sprites.front_default;
      console.log(`Name: ${name}\nTypes: ${types}\nSprites: ${sprites}`);
      createPokemonCard(pokemon);
    });
};

allPokemon();

app.use(express.static("web"));

app.listen(port, () => {
  console.log(`Pokemon app listening at http://localhost:${port}`);
});
