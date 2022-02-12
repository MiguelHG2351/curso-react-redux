import { API } from "./config"

const getPokemons = (limit = 151) => {
  const getPokeApi = fetch(`${API}pokemon?limit=${limit}`)
  return getPokeApi
}

export const getPokemonWithDeatils = () => {
  return getPokemons()
  .then(response => response.json())
  .then(data => {
      const pokemonList = data.results
      console.log(pokemonList)

      return Promise.all(pokemonList.map((pokemon) => fetch(pokemon.url)))
  })
  .then(async pokemonResolve => {
    const pokemonData = await Promise.all(pokemonResolve.map(resolve => resolve.json()));
    return pokemonData
  })
  .catch(error => {
    console.log(error);
  });
}

export default getPokemons