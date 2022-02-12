import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR, FETCH_POKEMON_WITH_DETAILS } from "./type";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
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

export const fetchPokemons = () => ({
    type: FETCH_POKEMON_WITH_DETAILS,
});

