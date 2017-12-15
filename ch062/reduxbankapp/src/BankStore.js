import { createStore, applyMiddleware } from 'redux'
import BankReducer from './BankReducer'
import thunk from 'redux-thunk'

const logger = (store) => (next) => (action) => {
    console.log('dispatch : ', action);
    next(action);
}

const validateNumber = (store) => (next) => (action) => {
    if(action.amount) {
        if(isNaN(Number(action.amount)) == true) {
            console.error('amount is not a number type')
        } else {
            next(action);
        }
    } else {
        next(action);
    }
}

const BankStore = createStore(BankReducer, applyMiddleware(logger, validateNumber, thunk));

export default BankStore;