var React = require('react');

var Bank = require('../bank/Bank.js');

var AccountList = React.createClass({

  render: function(){
    var theseAccounts = this.props.bank.filteredAccounts(this.props.type);

    var accountsList = theseAccounts.map(function(account, index){
      return(
        <li key={ index }>{account.owner} holds £{ account.amount }</li>
        )
    });
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