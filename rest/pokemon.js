const express = require('express');
const pokemon = express();
const axios = require('axios');

pokemon.set('view engine', 'pug');

pokemon.get('/', async (req, res) => {
    let pokedexResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(pokedexResponse);
    res.render('pokemon');
})

pokemon.use('/static', express.static('public'));
  
pokemon.listen(3000, () => {
    console.log('The application is running on localHost:3000');
});