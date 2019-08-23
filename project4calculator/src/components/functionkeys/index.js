import React from 'react'
import './functionkeys.scss'

class Functionkeys extends React.Component {
    render() {
        return (
            <div className="function-keys">

                <button className="calculator-key key-clear" onClick={() => { this.props.inputClear() }}>AC</button>
                <button className="calculator-key key-sign" onClick={() => { this.props.inputSign() }}>+/-</button>
                <button className="calculator-key key-percent" onClick={() => { this.props.inputPercentage() }}>%</button>

            </div>
        );
    }
}
export default Functionkeys;