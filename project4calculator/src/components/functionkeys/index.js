import React from 'react'
import './functionkeys.scss'

class Functionkeys extends React.Component {
    render() {
        return (
            <div className="function-keys">

                <button className="calculator-key key-clear">AC</button>
                <button className="calculator-key key-sign">+/-</button>
                <button className="calculator-key key-percent">%</button>

            </div>
        );
    }
}
export default Functionkeys;