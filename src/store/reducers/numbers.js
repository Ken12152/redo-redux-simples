import {
    NUM_MIN_CHANGED,
    NUM_MAX_CHANGED
} from '../actions/acionsType'

const defaultState = {
    Min: 0, 
    Max: 1000
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
