import { UPDATE_BUTTON_PRESSED } from './acionsType'

export function updateCalcNumbers(Min, Max) {
    return {
        type: UPDATE_BUTTON_PRESSED,
        payload: { Min, Max }
    }
}