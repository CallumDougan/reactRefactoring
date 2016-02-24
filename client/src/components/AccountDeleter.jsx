var React = require('react');

var AccountDeleter = React.createClass({

  handleClick: function(e){
    e.preventDefault;
    console.log('props', this.props);
    var account = this.props.account;
    this.props.bank.deleteAccount(account);
  },

  render: function(){
    return(
      <div>
      <button onClick={ this.handleClick }>Delete?</button>
      </div>
      )
  }

});

module.exports = AccountDeleter;