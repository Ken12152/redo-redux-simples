import {
    NUM_MIN_CHANGED,
    NUM_MAX_CHANGED
} from '../actions/acionsType'

export const defaultState = {
    Min: 0, 
    Max: 100
}

export default function(state = defaultState, action) {
    switch(action.type) {
        case NUM_MIN_CHANGED:
            return {
                ...state,
                Min: action.payload
            }
        case NUM_MAX_CHANGED:
            return {
                ...state,
                Max: action.payload
            }
        default:
            return state
    }
}
