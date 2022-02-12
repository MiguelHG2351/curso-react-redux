import { getPokemons, getPokemonWithDeatils } from "../api/getPokemons";
import { SET_POKEMON, SET_ERROR, CLEAR_ERROR, TOGGLE_LOADER, SET_FAVORITE } from "./type";

export const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload
}); 

export const setError = (payload) => ({
    type: SET_ERROR,
    payload
});

export const clearError = (payload) => ({
    type: CLEAR_ERROR,
    payload
});

export const toggleLoader = () => ({
    type: TOGGLE_LOADER,
});

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload
});

export const fetchPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
  
  try {
    dispatch(toggleLoader())
    const response = await getPokemons(10);
    const pokemons = (await response.json()).results;
    const pokemonsWithDetails = await getPokemonWithDeatils(pokemons);
    console.log(pokemonsWithDetails);
    dispatch(setPokemon(pokemonsWithDetails))
    dispatch(toggleLoader())
  } catch(err) {
    dispatch(setError(err))
  }

    // getPokemons()
    // .then(response => response.json())
    // .then(data => {
    //     const pokemonList = data.results
    //     console.log(pokemonList)

    //     return Promise.all(pokemonList.map((pokemon) => fetch(pokemon.url)))
    //   // dispatch(setPokemon(data.results))
    // })
    // .then(async pokemonResolve => {
    //   const pokemonData = await Promise.all(pokemonResolve.map(resolve => resolve.json()));
    //   console.log(pokemonData)
    //   dispatch(setPokemon(pokemonData))
    // })
    // .catch(error => {
    //   console.log(error);
    // });
}
