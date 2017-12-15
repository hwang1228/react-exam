import Constants from './Constants'
import { combineReducers } from 'redux'
import update from 'immutability-helper'

const initialState = { 
    initialBalance: 0,
    initialUI : {
        showInfo: true
    }
 }

const uiReducer = (state = initialState.initialUI, action) => {
    if(action.type === Constants.TOGGLE) {
        return update(state, {
            showInfo: {
                $apply: (currentState) => !currentState
            }
        });
    } else {
        return state;
    }
}

let balanceReducer = (state = initialState.initialBalance, action) => {
    // console.log(action);
    switch(action.type) {
        // 초기값 부여로 필요 없어짐.
        // case Constants.CREATE:  
        //     return initialState;
        case Constants.DEPOSIT:
            return state + parseFloat(action.amount);
        case Constants.WITHDRAW:
            return state - parseFloat(action.amount);
        default: return state;
    }
}

const BankReducer = combineReducers({
    balance: balanceReducer,
    ui: uiReducer
})

export default BankReducer;