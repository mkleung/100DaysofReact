import React from 'react'
import './numberkeys.scss'

class Numberkeys extends React.Component {
    render() {
        return (
            <div className="number-keys">

                <button className="calculator-key key-0" onClick={() => { this.props.inputDigit(0) }}>0</button>
                <button className="calculator-key key-dot" onClick={() => { this.props.inputDot() }}>.</button>
                <button className="calculator-key key-back" onClick={() => { this.props.inputBack() }}><i className="fa fa-angle-left"></i></button>
                <button className="calculator-key key-1" onClick={() => { this.props.inputDigit(1) }}>1</button>

                <button className="calculator-key key-2" onClick={() => { this.props.inputDigit(2) }}>2</button>
                <button className="calculator-key key-3" onClick={() => { this.props.inputDigit(3) }}>3</button>
                <button className="calculator-key key-4" onClick={() => { this.props.inputDigit(4) }}>4</button>

                <button className="calculator-key key-5" onClick={() => { this.props.inputDigit(5) }}>5</button>
                <button className="calculator-key key-6" onClick={() => { this.props.inputDigit(6) }}>6</button>
                <button className="calculator-key key-7" onClick={() => { this.props.inputDigit(7) }}>7</button>

                <button className="calculator-key key-8" onClick={() => { this.props.inputDigit(8) }}>8</button>
                <button className="calculator-key key-9" onClick={() => { this.props.inputDigit(9) }}>9</button>

            </div>
        );
    }
}
export default Numberkeys;