import { createStore, combineReducers } from 'redux'
import numbersReducer from './reducers/numbers'
import calculateNumbersReducer from './reducers/numsToCalc'

const Reducers = combineReducers({
    numbers: numbersReducer,
    calculateNumbers: calculateNumbersReducer 
})

function storeConfig() {
    return createStore(Reducers)
}

export default storeConfig