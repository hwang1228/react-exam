import React, { Component } from 'react';
import { render } from 'react-dom';
import BankBalanceStore from './BankBalanceStore';
import BankRewardStore from './BankRewardStore'
import BankActions from './BankActions';
import { Container } from 'flux/utils';

class App extends Component {
  constructor(){
    super(...arguments);
    BankActions.createAccount();
    // this.state = {
    //     balance : BankBalanceStore.getState()
    // }
  }

  // componentDidMount() {
  //     this.storeSubscription = BankBalanceStore.addListener(data=>this.handleStoreChange(data));
  // }

  // componentWillUnmount() {
  //     this.storeSubscription.remove();
  // }

  // handleStoreChange() {
  //     this.setState({ balance : BankBalanceStore.getState() });
  // }

  deposit() {
    BankActions.depositIntoAccount(Number(this.refs.amount.value));
    this.refs.amount.value = '';
  }

  withdraw() {
    BankActions.withdrawFromAccount(Number(this.refs.amount.value));
    this.refs.amount.value = '';
  }

  render(){
    return (
      <div>
        <header>FluxTrust Bank</header>
        <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
        <h2>Your Points Rewards Tier is {this.state.rewardsTier}</h2>
        <div className="atm">
          <input type="text" placeholder="Enter Amount" ref="amount" />
          <br />
          <button onClick={this.withdraw.bind(this)}>Withdraw</button>
          <button onClick={this.deposit.bind(this)}>Deposit</button>
        </div>
      </div>

    );
  }
}

//add
App.getStores = () => ([BankBalanceStore, BankRewardStore]);
App.calculateState = (prevState) => {
  return {
    balance: BankBalanceStore.getInitialState(),
    rewardsTier: BankRewardStore.getInitialState()
  };
}

const AppContainer = Container.create(App);

export default AppContainer;