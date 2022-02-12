import { API } from "./config"

export const getPokemons = (limit = 151) =>
  fetch(`${API}pokemon?limit=${limit}`)

export const getPokemonWithDeatils = async (pokemon = []) => {
  // Promise with all pokemon
  const pokemonResponse = Promise.all(
    pokemon.map(pokemon => fetch(pokemon.url))
  )
  // array of promise
  const pokemonData = await pokemonResponse
  // console.log(Promise.all(pokemonData))

  return await await Promise.all(pokemonData.map(resolve => resolve.json()))
    
}