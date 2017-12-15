import { ReduceStore } from 'flux/utils'
import BankBalanceStore from './BankBalanceStore'
import AppDispatcher from './AppDispatcher'
import bankConstants from './Constants'

class BankRewardStore extends ReduceStore {
    getInitialState() {
        return 'Basic';
    }

    reduce(state, action) {
        this.getDispatcher().waitFor([
            BankBalanceStore.getDispatchToken()
        ]);
        if(action.type === bankConstants.DEPOSIT || action.type === bankConstants.WITHDRAW ) {
            let balance = BankBalanceStore.getState();
            return balance>=5000?
                    (balance>=10000?
                        (balance>=50000?'Platinum':'Gold'):'Silver'):'Basic';
        }
        return state;
    }

}

export default new BankRewardStore(AppDispatcher);
