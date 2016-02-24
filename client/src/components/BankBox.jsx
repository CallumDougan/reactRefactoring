var React = require('react');
var sampleAccounts = require('../sample.json');

var Bank = require('../bank/Bank.js');

var AccountBox = require('./AccountBox.jsx');

var BankBox = React.createClass({
  getInitialState: function(){
    return {
      accounts: sampleAccounts
    };
  },

  deleteAccount: function(account){
    console.log('attempting to delete:', account)
    var accountIndex = this.state.accounts.indexOf(account);
    this.state.accounts.splice(accountIndex, 1);
    this.setState({accounts: this.state.accounts})
  },

  addInterest: function(account){
    console.log('attempting to add interest: ', account);
    account.amount *= 1.1;
    this.setState({accounts: this.state.accounts})
    console.log(account);
  },

  render: function(){
    var bank = new Bank();
    for(var account of this.state.accounts){
      bank.addAccount(account);
    };

    return(
      <div>
      <h1>React Bank Box</h1>
      <h2>Total: £{ bank.totalCash() } </h2>
      <AccountBox type='business' bank={ bank } deleteAccount={ this.deleteAccount } addInterest = { this.addInterest }/>
      <AccountBox type='personal' bank={ bank } deleteAccount={ this.deleteAccount } addInterest = { this.addInterest }/>
      </div>
      )
  }
});

module.exports = BankBox;