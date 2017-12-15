import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import BankStore from './BankStore'
// import Constants from './Constants'

export default class BankApp extends Component {
    static propTypes = {
        balance: PropTypes.number.isRequired,
        onDeposit: PropTypes.func.isRequired,
        onWithdraw: PropTypes.func.isRequired,
        onToggle: PropTypes.func,
        showInfo: PropTypes.bool.isRequired
    }

    handleDeposit() {
        this.props.onDeposit(this.refs.amount.value);
        this.refs.amount.value = '';
    }

    handleWithdraw() {
        this.props.onWithdraw(this.refs.amount.value);
        this.refs.amount.value = '';
    }

    render() {
        // console.log("BankAppRender")
        return (
            <div>
                <header>Redux Bank</header>
                <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
                <div className="atm">
                    <input type="text" placeholder="Enter Ammount" ref="amount" />
                    <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
                    <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
                </div>
                <div className="info" onClick={this.props.onToggle}>
                    <strong>Exchange Rates:</strong>
                    <div className={this.props.showInfo? 'info--visible' : 'info--closed'}>
                        <span>$1 USD=</span>{}
                        <span className="rate">1200 Won, </span> 
                        <span className="rate">99 Yen </span>
                    </div>
                </div>
            </div>
        );
    }
}
