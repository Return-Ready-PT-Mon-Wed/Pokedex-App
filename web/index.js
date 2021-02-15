const allPokemon = async () => {
  for (let i = 1; i <= 150; i++);

  const getPokemon = async (i) => {
    pokeElement.innerHTML = "";
    var requestUri = "http://localhost:4000/pokemon/" + i;
    fetch(requestUri)
      .then((response) => {
        return response.json();
      })
      .then((pokemon) => {
        const name =
          pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        const types = pokemon.types.map((type) => type.type.name).join(", ");
        const sprites = pokemon.sprites.front_default;
        const pokeColors = pokeColors[types];
        const pokeTemplate = { name, types, sprites, pokeColors };

        json.pokemon.forEach(pokeTemplate);
        pokeElement.innerHTML += `
                            <div>
                            <h3>${name}</h3>
                            <h4>${pokemon.id.toString().padStart(3, "0")}
                                </h4>
                            <h5>${types}</h5>
                            <h6>color</h6>
                            <img src="${sprites}">
                        </div>
                        `;
      });
  };
  getPokemon();
};
