import { SET_POKEMON, SET_FAVORITE } from "../actions/type"
import { fromJS } from "immutable"

const initialState = fromJS({
    list: [],
})

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return state.set('list', fromJS(action.payload))
        case SET_FAVORITE:
            const index = state.get('list').findIndex(pokemon => pokemon.get('id') === action.payload)
            const isFavorite = state.getIn(['list', index, 'favorite']);

            return state.setIn(['list', index, 'favorite'], !isFavorite)
        default:
            return state;
    }
}

export default pokemonReducer;