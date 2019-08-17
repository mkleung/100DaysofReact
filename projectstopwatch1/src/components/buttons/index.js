import React from 'react'

// stateless component

export default function Buttons(props) {
    const label = props.timingEvents.length % 2 === 0 ? 'START' : 'STOP'
    return (
        <div className="buttons">
            <button className="btn btn-primary btn-lg"
            onClick={props.handleClick}>
                {label}
            </button>
        </div>
    )
}