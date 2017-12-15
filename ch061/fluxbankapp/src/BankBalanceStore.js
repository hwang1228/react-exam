// import {EventEmitter} from 'fbemitter'
import AppDispatcher from './AppDispatcher'
import Constants from './Constants'
// import { Store } from 'flux/utils'
import { ReduceStore } from 'flux/utils'

let balance = 0;

class BankBalanceStore extends ReduceStore {
    getInitialState() {
        return 0;
    }
    // getState() {
    //     return balance;
    // }

    reduce(state, action) {
        switch(action.type) {
            case Constants.CREATE: 
                return 0;
            case Constants.DEPOSIT: 
                return state + action.amount;
            case Constants.WITHDRAW: 
                if(state< action.amount) {
                    console.error(`The balance (${balance}) is lower than withdraw ${action.amount}`);
                    return state;
                }
                return state - action.amount;
            default: return state;
        }
    }

    // __onDispatch(action) {
    //     switch(action.type) {
    //         case Constants.CREATE: 
    //             balance = 0;
    //             this.__emitChange();
    //             break;
    //         case Constants.DEPOSIT: 
    //             balance += action.amount;
    //             this.__emitChange();
    //             break;
    //         case Constants.WITHDRAW: 
    //             if(balance< action.amount) {
    //                 console.error(`The balance (${balance}) is lower than withdraw ${action.amount}`);
    //                 break;
    //             }
    //             balance -= action.amount;
    //             this.__emitChange();
    //             break;
    //         default: break;
    //     }
    // }
}

export default new BankBalanceStore(AppDispatcher);