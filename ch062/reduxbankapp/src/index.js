import React from 'react';
import { render } from 'react-dom';
import './index.css';
import BankApp from './BankApp'
// import Constants from './Constants'
import BankStore from './BankStore'
import BankActionCreators from './BankActionCreators'
import { connect, Provider } from 'react-redux'

const mapStateToProps = (state) => {
    return  {
        balance: state.balance,
        showInfo: state.ui.showInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDeposit: (amount) => dispatch(BankActionCreators.depositIntoAccount(amount)),
        onWithdraw: (amount) => dispatch(BankActionCreators.withdrawFromAccount(amount)),
        onToggle: () => dispatch(BankActionCreators.async_toggleInfo())
    }
}

const BankAppContainer = connect(mapStateToProps, mapDispatchToProps) (BankApp)

render(
    <Provider store={BankStore}> 
        <BankAppContainer />
    </Provider>
    , document.getElementById('root')
);
