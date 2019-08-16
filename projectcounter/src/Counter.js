import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            counter: 0
        }
    }
    increment = () => {
        this.setState({
            counter: this.state.counter+1
        })
    };
    decrement = () => {
        this.setState({
            counter: this.state.counter-1
        })
    };
    render() {
        const counter = this.state.counter;
        return (
            <div>
              <p>This is our current count:</p>
            <p>{counter}</p>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            </div>
          );
    }
}

export default Counter;