import { SET_POKEMON, SET_ERROR, TOGGLE_LOADER, CLEAR_ERROR } from "../actions/type"

const initialState = {
    list: [],
    error: '',
    loading: false,
    favorites: []
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return {
                ...state,
                list: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload.message
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: ''
            }
        case TOGGLE_LOADER:
            console.log(state)
            return {
                ...state,
                loading: !state.loading
            }
        default:
            return state;
    }
}

export default pokemonReducer;