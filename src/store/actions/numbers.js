import {
    NUM_MIN_CHANGED,
    NUM_MAX_CHANGED
} from './acionsType'

export function minChange(value) {
    return {
        type: NUM_MIN_CHANGED,
        payload: value
    }
}

export function maxChange(value) {
    return {
        type: NUM_MAX_CHANGED,
        payload: value
    }
}
