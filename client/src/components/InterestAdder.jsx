var React = require('react');

var InterestAdder = React.createClass({

  handleInterestClick: function(e){
    e.preventDefault;
    var account = this.props.account;
    this.props.addInterest(account);
  },

  render: function(){
    return(
      <div>
        <button onClick={ this.handleInterestClick }>Apply interest?</button>
      </div>
      )
  }

});

module.exports = InterestAdder;