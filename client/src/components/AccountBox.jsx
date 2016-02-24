var React = require('react');

var AccountList = require('./AccountList.jsx');

var AccountBox = React.createClass({

  render: function(){
    return(
      <div>
      <h3>Account Box: { this.props.type }</h3>
      <h4>Account type total: { this.props.bank.totalCash(this.props.type) }</h4>
      <AccountList bank={ this.props.bank } type = { this.props.type }/>
      </div>
      )
  }
});

module.exports = AccountBox;