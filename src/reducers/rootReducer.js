import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import uiReducer from './ui';

const reducers = combineReducers({
    pokemon: pokemonReducer,
    ui: uiReducer
})

export default reducers;
