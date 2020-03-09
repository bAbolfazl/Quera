import React, { Component } from "react";
import "./Timer.css";

export class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };
    let timer;
  }
  setTime = () => {
    this.setState(
      (oldState) => {
        return {time: ++oldState.time};
      },
      () => console.log("set time", this.state)
    );
  };
  //   handleTimer = () => {
  //       const container = document.querySelector('.container')
  //       container.addEventListener('load', setTime)
  //   }
  clearTime = () => {
    this.setState({ time: 0 }, () => console.log("clear time", this.state));
    clearInterval(this.timer);
    this.timer = setInterval(this.setTime, 1000);

  };
  componentWillUnmount() {
      clearInterval(this.timer)
  }

  componentDidMount() {
    this.timer = setInterval(this.setTime, 1000);
  }

  render() {
      console.log('12',this.state.time)
    return (
      <div className="container">
        <div className="timer">{this.state.time}</div>
        <button onClick={this.clearTime}>Reset Timer</button>
      </div>
    );
  }
}
