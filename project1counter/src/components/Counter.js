import React, { Component } from "react";
import "./counter.scss";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };
  render() {
    const counter = this.state.counter;
    return (
      <div className="counter">
        <button className="btn btnTop" onClick={this.increment} />
        <button className="btn btnBottom" onClick={this.decrement} />
        <div className="count">{counter}</div>
      </div>
    );
  }
}

export default Counter;
