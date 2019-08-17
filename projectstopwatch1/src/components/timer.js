import React from 'react'
import ElapsedTime from './elapsed-time'
import Buttons from './buttons'

import './styles.css'

class Timer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timingEvents: [],
            nonce: 0
        }

        this.addTimerEvent = this.addTimerEvent.bind(this)
        this.tick = this.tick.bind(this)
        this.poll = setInterval(this.tick, 1000)
    }

    addTimerEvent() {
        this.setState({
            timingEvents: [
                ...this.state.timingEvents,
                new Date()
            ]
        })

        console.log(new Date())
    }


    tick() {
        this.setState((prevState) => ({ nonce: prevState.nonce+1 }))
    }

    render() {
        return (
        <div>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">
                        Timer
                    </h1>
                    <div className="lead">
                        <ElapsedTime timingEvents={this.state.timingEvents} />
                    </div>
                    <hr className="my-4"></hr>
                    <Buttons  
                    handleClick={this.addTimerEvent}
                    timingEvents={this.state.timingEvents} />
                </div>
            </div>
        </div>
        )
    }
}

export default Timer