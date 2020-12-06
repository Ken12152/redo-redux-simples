import { createStore, combineReducers } from 'redux'
import numbersReducer from './reducers/numbers'

const Reducers = combineReducers({
    numbers: numbersReducer
})

function storeConfig() {
    return createStore(Reducers)
}

export default storeConfig