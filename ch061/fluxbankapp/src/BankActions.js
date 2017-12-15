import AppDispatcher from './AppDispatcher'
import Constants from './Constants'

let BankActions = {
    createAccount() { // 계좌개설
        AppDispatcher.dispatch({
            type: Constants.CRATE,
            amount: 0
        });
    },
    depositIntoAccount(amount = 0) { // 입금
        AppDispatcher.dispatch({
            type: Constants.DEPOSIT,
            amount: amount
        });
    },
    withdrawFromAccount(amount = 0) { // 출금
        AppDispatcher.dispatch({
            type: Constants.WITHDRAW,
            amount: amount
        });
    }
}

export default BankActions;