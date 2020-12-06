import { UPDATE_BUTTON_PRESSED } from '../actions/acionsType'
import { defaultState } from './numbers'

export default function(state = defaultState, action) {
    switch(action.type) {
        case UPDATE_BUTTON_PRESSED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}