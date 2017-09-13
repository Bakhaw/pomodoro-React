import React, { Component } from 'react';

class StartButton extends Component {
  render() {
    return(
      <button onClick={this.props.startTime}>START (appuyer qu'une seule fois)</button>
    );
  }
}

export default StartButton;
