import React, { Component } from "react";
import "./timer.scss";
import Display from './Display'
import Play from './Play'
import Delete from './Delete'

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { on: false, timeMin: 0, timeSec: 0, timeMil: 0 };
    this.timerId = 0;
  }
  triggerTimer = () => {
    console.log("start");
    this.state.on ? this.pauseTimer() : this.startTimer();
  }

  startTimer = () => {
    let { timeSec, timeMil } = this.state;
    this.setState({ on: true });
    this.timerId = setInterval(() => {
      if (this.state.timeMil === 99) {
        this.setState({
          timeSec: (timeSec += 1),
          timeMil: (timeMil = 0)
        });
      } else {
        this.setState({ timeMil: (timeMil += 1) });
      }
    }, 10);
  }

  pauseTimer = () => {
    this.setState({ on: false });
    this.clearTimer();
  }

  resetTimer = () => {
    this.clearTimer();
    this.setState({ on: false, timeSec: 0, timeMil: 0 });
  }

  componentWillUnmount = () => {
    this.clearTimer();
  }

  clearTimer = () => {
    clearInterval(this.timerId);
  }

  render() {
    const on = this.state.on;
    const sec = this.state.timeSec;
    const mil = this.state.timeMil;
    return (
      <div>
        <Display sec={sec} mil={mil} />
        <Play on={on} triggerTimer={this.triggerTimer} />
        <Delete resetTimer={this.resetTimer} />
      </div>
    );
  }


}

export default Timer;
