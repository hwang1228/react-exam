import Constants from './Constants'

const BankActionCreators = {
    depositIntoAccount(amount) {
        //server 통신이 필요한 경우 여기에 넣으면 됨.

        //
        return {
            type: Constants.DEPOSIT,
            amount: amount
        };
    },
    withdrawFromAccount(amount) {
        //server 통신이 필요한 경우 여기에 넣으면 됨.

        //
        return {
            type: Constants.WITHDRAW,
            amount: amount
        };
    },
    toggleInfo() {
        return {
            type: Constants.TOGGLE
        }
    },
    async_toggleInfo() {
        return (dispatch) => {
            setTimeout(() => {
                dispatch(this.toggleInfo());
            }, 2000);
        };
    }
}

export default BankActionCreators;