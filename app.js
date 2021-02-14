const pokedex = document.getElementById("pokedex");
console.log(pokedex);
const fetchPokemon = () => {
    const promises = [];
    for(let i = 1; i <= 200; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map((obj) => obj.type.name).join(', '),
            cardColor: this.determineCardColor(data.types[0].type.name)
     }))
        pokeDexDisplay(pokemon);
    });
};
function determineCardColor(type){
    let color = '';
    switch(type){
        case 'normal':
            color = 'brown';
            break;
        case 'fighting':
            color = 'blue';
            break;
        case 'grass':
            color = 'green';
            break;
        default:
            color = 'red';
            break;
    }
    return color;
}
const pokeDexDisplay = (pokemon) => {
    console.log();
    const pokemonHTMLString = pokemon.map(poke => `
    <li class="card" style="background-color:${poke.cardColor}">
    <h2 class="card-title"> ${poke.id}. ${poke.name} </h2>
        <img class="card-image" src="${poke.image}"/>
        <p class="card-type"> Type: ${poke.type}</p>
    </li>`
    )
    .join('');
    pokedex.innerHTML = pokemonHTMLString;
}
    fetchPokemon();
    