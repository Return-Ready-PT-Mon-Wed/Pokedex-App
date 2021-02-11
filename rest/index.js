const express = require("express");
const app = express();

const fetch = require("node-fetch"); // npm install node-fetch
const api = "https://pokeapi.co/api/v2/pokemon/150"; //store API URL to API Hardcoded
const port = 5000;

/*
id:number
name:string
img:string
types:string[]
*/
app.use(express.static("web")); //Use resources inside from web folder

app.get("/pokemon/", async (req, res) => {
  //async function
  let resp = await fetch(api);
  let data = await resp.json();
  console.log(data); //console.log the data from the API
  res.send(data.sprites.front_default);

  var pokemon = {};
  pokemon["name"] = data.name;
  pokemon["id"] = data.id;
  pokemon["avatar"] = data.sprites["front_default"];
  pokemon["type"] = data.types;
});

app.listen(port, () => {
  console.log(`Pokemon app listening at http://localhost:${port}`);
});
