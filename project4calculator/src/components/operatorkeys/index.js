import React from 'react'
import './operatorkeys.scss'

class Operatorkeys extends React.Component {
    render() {
        return (
            <div className="operator-keys" >
                <button className="calculator-key key-divide"><span>&#247;</span></button>
                <button className="calculator-key key-multiply">x</button>
                <button className="calculator-key key-minus">-</button>
                <button className="calculator-key key-plus">+</button>
                <button className="calculator-key key-equal">=</button>
            </div >
        );
    }
}
export default Operatorkeys;