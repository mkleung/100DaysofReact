import React from 'react'
import './numberkeys.scss'

class Numberkeys extends React.Component {
    render() {
        return (
            <div className="number-keys">

                <button className="calculator-key key-0">0</button>
                <button className="calculator-key"></button>
                <button className="calculator-key key-dot">.</button>
                <button className="calculator-key key-1">1</button>

                <button className="calculator-key key-2">2</button>
                <button className="calculator-key key-3">3</button>
                <button className="calculator-key key-4">4</button>

                <button className="calculator-key key-5">5</button>
                <button className="calculator-key key-6">6</button>
                <button className="calculator-key key-7">7</button>

                <button className="calculator-key key-8">8</button>
                <button className="calculator-key key-9">9</button>

            </div>
        );
    }
}
export default Numberkeys;