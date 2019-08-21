import React from 'react'
import './calculator.scss'
import Display from '../components/display'
import Operatorkeys from '../components/operatorkeys'
import Functionkeys from '../components/functionkeys'
import Numberkeys from '../components/numberkeys'

class Calculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayValue: "0"
        }
    }
    render() {
        return (
            <div className="calculator">
                <Display displayValue={this.state.displayValue} />

                <div className="calculator-keypad">
                    <div className="left-keys">
                        <Functionkeys />
                        <Numberkeys />
                    </div>
                    <div className="right-keys">
                        <Operatorkeys />
                    </div>


                </div>
            </div>
        )
    }
}

export default Calculator;