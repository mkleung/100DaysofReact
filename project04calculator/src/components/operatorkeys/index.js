import React from 'react'
import './operatorkeys.scss'

class Operatorkeys extends React.Component {
    render() {
        return (
            <div className="operator-keys">
                <button className="calculator-key key-divide" onClick={() => { this.props.performOperation("/") }}><span>&#247;</span></button>
                <button className="calculator-key key-multiply" onClick={() => { this.props.performOperation("*") }}>*</button>
                <button className="calculator-key key-minus" onClick={() => { this.props.performOperation("-") }}>-</button>
                <button className="calculator-key key-plus" onClick={() => { this.props.performOperation("+") }}>+</button>
                <button className="calculator-key key-equal" onClick={() => { this.props.performEqual() }}>=</button>
            </div>
        );
    }
}
export default Operatorkeys;