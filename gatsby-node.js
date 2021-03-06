const axios = require("axios")
const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)
const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`);
      

      return { ...pokemon};
    })
  );



exports.createPages = async ({ actions: { createPage } }) => {
  var pokeCount = [];
    for (let i = 1; i <= 100; i++) {
        pokeCount.push(i);
    }
  const allPokemon = await getPokemonData(pokeCount)
  createPage({
    path: `/pokemon`,
    component: require.resolve("./src/templates/all-pokemon.js"),
    context: { allPokemon },
  })
   // Create a page for each Pokémon.
   allPokemon.forEach(pokemon => {
    createPage({
      path: `/pokemon/${pokemon.name}/`,
      component: require.resolve('./src/templates/pokemon.js'),
      context: { pokemon }
    })

    
  })
}