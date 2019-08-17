import React, { Component } from 'react'
import Button from './Button'

// https://codepen.io/peterbe/pen/LNxmRp?editors=1010

class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {on: false, time: 0};
        this.timerId = 0;
    }
    render () {
        const title = this.state.on ? "Pause" : "Start";
        return (
            <div>
                <h1>Number:  {this.state.time}</h1>
                <hr />
                <Button 
                    title={title}
                    handleTrigger={this.triggerTimer.bind(this)} 
                />
            </div>
        )
    }

    componentWillUnmount() {
        this.clearTimer()
    }

    triggerTimer() {
        console.log("start");
        this.state.on ? this.pauseTimer() :this.startTimer();
    }

    updateTime() {
        this.setState({time: this.state.time += 1});
    }

    startTimer() {
        this.setState({on: true});
        this.timerId = setInterval(()=>{
            this.updateTime();
        }, 1000);
    }

    pauseTimer() {
        this.setState({on: false});
        this.clearTimer()
    }

    formatTime() {
    }

    clearTimer() {
        console.log("clear")
        clearInterval(this.timerId);
    }

}

export default Timer