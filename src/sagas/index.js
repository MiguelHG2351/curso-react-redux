import { call, put, takeEvery } from 'redux-saga/effects'
import { setPokemons } from '../actions'
import { FETCH_POKEMON_WITH_DETAILS } from '../actions/type'
import { getPokemonWithDeatils } from '../api/getPokemons'

function* fetchPokemonWithDetails() {
    try {
        const pokemonWithDetails  = yield call(getPokemonWithDeatils)
        yield put(setPokemons(pokemonWithDetails))
    } catch(err) {
        console.log(err)
    }
}

export function* pokemonSaga() {
    yield takeEvery(FETCH_POKEMON_WITH_DETAILS, fetchPokemonWithDetails)
}
