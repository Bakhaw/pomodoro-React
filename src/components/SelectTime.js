import React, { Component } from 'react';

class SelectTime extends Component {
  handleChange() {
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    this.props.selectTime(hour.value, minute.value, second.value);
  }

  render() {
    return(
      <div>
        <h1>Select your time</h1>
        <h3>Hour: <input id="hour" onChange={this.handleChange.bind(this)} type="number" min="0" max="23" defaultValue={this.props.initialTime.hour()}/></h3>
        <h3>Minute: <input id="minute" onChange={this.handleChange.bind(this)} type="number" min="0" max="59" defaultValue={this.props.initialTime.minute()}/></h3>
        <h3>Second: <input id="second" onChange={this.handleChange.bind(this)} type="number" min="0" max="59" defaultValue={this.props.initialTime.second()}/></h3>
      </div>
    );
  }
}

export default SelectTime;
