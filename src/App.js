import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import StartButton from './components/StartButton';
import SelectTime from './components/SelectTime';
import moment from 'moment';

class App extends Component {
  constructor() {
    super();
    this.state = {
      initialTime: moment().set({hour: 0, minute: 25, second: 0})
    }
  }

  resetTime() {
    if (this.state.initialTime.hour() === 0 && this.state.initialTime.minute() === 0 && this.state.initialTime.second() === 0) {
      this.setState({
        initialTime: moment().set({hour: 0, minute: 25, second: 0})
      });
        this.stopFunction();
        this.notificationFunction();
    }
  }

  startTime() {
     this.timerID = setInterval(
       () => this.tick(),
       1000 //1000 ms => 1 seconde
     );
   }

   tick() {
     this.setState({
       initialTime: this.state.initialTime.subtract('second', 1)
     });
     this.resetTime();
   }

   selectTime(hour, minute, second) {
     this.setState({initialTime: this.state.initialTime.set({hour, minute, second})})
   }

   stopFunction() {
       clearInterval(this.timerID);
   }

   notificationFunction() {
     var notification = new Notification('Faites une pause!', {
      body: "Allez vous détendre 5 minutes! :)",
    });
    return notification;
   }

  render() {
    return (
      <div>
        <Timer initialTime={this.state.initialTime}/>
        <StartButton startTime={this.startTime.bind(this)}/>
        <SelectTime initialTime={this.state.initialTime} selectTime={this.selectTime.bind(this)}/>
      </div>
    );
  }
}

export default App;
