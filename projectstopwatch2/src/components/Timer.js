import React, { Component } from 'react'
import Button from './Button'

// https://codepen.io/peterbe/pen/LNxmRp?editors=1010

class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {on: false, timeMin: 0, timeSec: 0, timeMil: 0};
        this.timerId = 0;
    }
    render () {
        const title = this.state.on ? "Pause" : "Start";
        const prefix = this.state.timeMil < 10 ? "0": "";
        return (
            <div>
                <h1>Time:  {this.state.timeMin}m:{this.state.timeSec}s:{prefix}{this.state.timeMil}ms</h1>
                <hr />
                <Button 
                    title={title}
                    handleTrigger={this.triggerTimer.bind(this)} 
                />
            </div>
        )
    }


    triggerTimer() {
        console.log("start");
        this.state.on ? this.pauseTimer() : this.startTimer();
    }

    startTimer() {
        this.setState({on: true});
        this.timerId = setInterval(()=>{
            console.log(this.state.timeMil);
            if (this.state.timeSec === 5) {
                this.setState({timeMin: this.state.timeMin += 1, timeSec: this.state.timeSec = 0, timeMil: this.state.timeMil = 0});
            }
            else if (this.state.timeMil === 10) {
                this.setState({timeSec: this.state.timeSec += 1, timeMil: this.state.timeMil = 0 });
            }

            else {
                this.setState({timeMil: this.state.timeMil += 1});
            }
            
        }, 100);
    }

    pauseTimer() {
        this.setState({on: false});
         this.clearTimer()
    }
    

    componentWillUnmount() {
        this.clearTimer()
    }

    clearTimer() {
        console.log("clear")
        clearInterval(this.timerId);
    }



}

export default Timer