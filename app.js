const express = require("express");
const app = express();
const cors = require("cors"); // add cors
//const path = require("path");
//const web = path.join(__dirname, "web");
const fetch = require("node-fetch"); // npm install node-fetch
const { default: axios } = require("axios");
const port = 5000;
//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;

//global.document = new JSDOM(html).window.document;

app.use(cors());
//app.use(express.static("web"));

//app.get("/Pokemon", function (req, res) {
//  res.sendFile(path.join(web, "index.html"));
//});

app.get("/Pokemon/:id", async (req, res) => {
  let pokeNum = req.params.id;
  let pokeResp = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokeNum}`
  );
  res.send(pokeResp.data);
});

app.listen(port, () => {
  console.log(`Pokemon app listening at http://localhost:${port}`);
});
