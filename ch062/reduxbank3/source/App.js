import BankApp from './BankApp';
import React from 'react'
import { render } from 'react-dom';
import bankStore from './BankStore';
import constants from './Constants';
import bankActionCreators from './BankActionCreators';
import { connect, Provider } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        balance : state.balance,
        showInfo : state.ui.showInfo
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeposit : (amount)=> dispatch(bankActionCreators.depositIntoAccount(amount)),
        onWithdraw : (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount)),
        onToggle : () => dispatch(bankActionCreators.async_toggleInfo())
    };
}

const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp);

render(
    <Provider store={bankStore}>
        <BankAppContainer />
    </Provider>,
    document.getElementById('root')
)
