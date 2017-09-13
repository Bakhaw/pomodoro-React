import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return(
      <h1>{this.props.initialTime.hour()}h : {this.props.initialTime.minute()}m : {this.props.initialTime.second()}s</h1>
    );
  }
}

export default Timer;
