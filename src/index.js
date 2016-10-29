// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END OF STUFF TO NOT MODIFY


var Card=React.createClass({
  render:function(){
    return(
      <div className="col-sm-2">
  <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/"+this.props.cardid+".png"} /></h1>
  </div>
    )
  }
})

var App = React.createClass({
  getInitialState: function(){
    return{
      deck: window.getDeck().shuffle(),
    }
  },
  shufflethedeck: function() {
    this.setState({
      deck: this.state.deck.shuffle(),
    })
  },
  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <div className="row">
        <Card cardid={this.state.deck[0]} />
        <Card cardid={this.state.deck[1]} />
        <Card cardid={this.state.deck[2]} />
        <Card cardid={this.state.deck[3]} />
        <Card cardid={this.state.deck[4]} />
          <div className="col-sm-2">
            <h1><a href="#" className="btn btn-success" onClick={this.shufflethedeck}>Deal</a></h1>
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
