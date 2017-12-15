import constants from './Constants';

const bankActionCreators = {
    depositIntoAccount(amount) {
        return {
            type: constants.DEPOSIT_INTO_ACCOUNT,
            amount: amount
        };
    },
    withdrawFromAccount(amount) {
        return {
            type: constants.WITHDRAW_FROM_ACCOUNT,
            amount: amount
        };
    },
    toggleInfo() {
        return {
            type : constants.TOGGLE_INFO
        }
    },
    async_toggleInfo() {
        return (dispatch)=> {
            setTimeout(() => {
                dispatch(this.toggleInfo());
            }, 1000);
        }
    }
};

export default bankActionCreators;