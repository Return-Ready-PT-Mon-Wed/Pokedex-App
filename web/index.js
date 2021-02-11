const localhost = "http://localhost:5000/pokemon/";

async function allPoke() {
  const response = await fetch(localhost);
  const json = await response.json();
  console.log(json.name);
}
