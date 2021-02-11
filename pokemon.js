const express = require('express')
const app = express()
const port = 3000


fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        try {
            throw new Error('Error! Pokemon not here!')
        } catch (error) {
            document.getElementsByTagName("img").innerHTML = err.message;
        }(console.error("error"));
    });

fetch("https://pokeapi.co/api/v2/pokemon/1", {
        method: POST,
        body: json.stringtoify(data),
        headers: {
            'Content-type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error)
    });



console.log(`Pokedex app listening at http://localhost:${port}`)


const localhost = "http://localhost:3000";