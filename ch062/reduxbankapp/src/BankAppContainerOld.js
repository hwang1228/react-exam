import React, { Component } from 'react'
import BankStore from './BankStore'
// import Constants from './Constants'
import BankApp from './BankApp'
import BankActionCreators from './BankActionCreators'

export default class BankAppContainer extends Component {
    constructor() {
        super();
        // BankStore.dispatch({
        //     type: Constants.CREATE,
        //     amount: 0
        // })
        this.state = {
            balance: BankStore.getState().balance
        }
    }
    
    componentDidMount() {
        this.unsubscribe = BankStore.subscribe(()=> {
            this.setState({
                balance: BankStore.getState().balance
            })
        });
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <BankApp balance={BankStore.getState().balance} 
                onDeposit={amount => BankStore.dispatch(BankActionCreators.depositIntoAccount(amount))} 
                onWithdraw={amount => BankStore.dispatch(BankActionCreators.withdrawFromAccount(amount))} />
        )
    }
}
