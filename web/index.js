




const getPokemon = (start, pokeId) => {
  const allPokes = [];
  for (let i = start; i <= pokeId; i++) {
    allPokes.push(
      fetch(`http://localhost:4000/pokemon${i}`).then((res) => res.json())
    );
  }
  return Promise.all(allPokes);
};
