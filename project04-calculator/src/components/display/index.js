import React from 'react'
import './display.scss'

class Display extends React.Component {
    render() {
        return (
            < div className="calculator-display" > {this.props.displayValue}</div >
        );
    }
}
export default Display;