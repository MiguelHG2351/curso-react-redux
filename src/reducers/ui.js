import { SET_ERROR, TOGGLE_LOADER, CLEAR_ERROR } from "../actions/type"
import { fromJS } from "immutable"

const initialState = fromJS({
    error: '',
    loading: false,
})

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return state.set('error', action.payload.message)
        case CLEAR_ERROR:
            return state.set('error', '')
        case TOGGLE_LOADER:
            console.log(state)
            return state.set('loading', !state.get('loading'))
        default:
            return state;
    }
}

export default uiReducer;