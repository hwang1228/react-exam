import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import bankStore from './BankStore';
import constants from './Constants';

class BankApp extends Component {
    handleDeposit() {
        this.props.onDeposit(this.refs.amount.value);
        this.refs.amount.value = '';
    }

    handleWithdraw() {
        this.props.onWithdraw(this.refs.amount.value);
        this.refs.amount.value = '';
    }

    render() {
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

BankApp.propTypes = {
    balance: PropTypes.number,
    onDeposit: PropTypes.func,
    onWithdraw: PropTypes.func,
    onToggle : PropTypes.func
};

export default BankApp;