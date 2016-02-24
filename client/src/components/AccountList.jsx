var React = require('react');

var Bank = require('../bank/Bank.js');

var AccountDeleter = require('./AccountDeleter.jsx');
var InterestAdder = require('./InterestAdder.jsx');

var AccountList = React.createClass({

  render: function(){
    var theseAccounts = this.props.bank.filteredAccounts(this.props.type);
    var accountsList = theseAccounts.map(function(account, index){
      var cheatKey = account.amount;
      return(
        <div>
        <li key={ index }>
        {account.owner} holds £{ account.amount }
        </li>
        <AccountDeleter key={cheatKey} value={cheatKey} bank={ this.props.bank } deleteAccount={ this.props.deleteAccount } account={ account }/>
        <InterestAdder bank={ this.props.bank } account={ account } addInterest = { this.props.addInterest }/>
        </div>
        )
    }.bind(this));
    return(
      <div>
      <ul>
      { accountsList }
      </ul>
      </div>
      )
  }

});

module.exports = AccountList;