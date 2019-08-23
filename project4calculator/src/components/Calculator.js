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
            displayValue: "0",
            operator: "",
            value: "",
            nextValue: ""
        }
    }

    inputDigit = (digit) => {
        const { value, nextValue, operator } = this.state;
        let stringValue = (value === "0" ? String(digit) : String(value) + String(digit));
        let stringNextValue = nextValue === "0" ? String(digit) : String(nextValue) + String(digit);
        if (operator === "") {
            this.setState({
                value: stringValue,
                displayValue: stringValue,
            })
        }

        // if operator has been input
        else {
            this.setState({
                nextValue: stringNextValue,
                displayValue: stringNextValue,
            })
        }
    }

    performEqual = () => {
        const { displayValue, value, nextValue, operator } = this.state;
        let floatValue = parseFloat(value);
        let floatNextValue = parseFloat(nextValue);
        let result = 0;

        if (operator === "+") {
            result = floatNextValue + floatValue
        }
        else if (operator === "-") {
            result = floatValue - floatNextValue
        }
        else if (operator === "/") {
            result = floatValue / floatNextValue
        }
        else if (operator === "*") {
            result = floatNextValue * floatValue
        }
        else {
            result = displayValue
        }
        this.setState({
            displayValue: result,
            value: result,
            nextValue: "",
            operator: ""
        })
    }


    inputClear = () => {
        this.setState({
            displayValue: "0",
            operator: "",
            value: "",
            nextValue: ""
        })
    }

    inputSign = () => {
        const { displayValue } = this.state;
        var value = displayValue.toString();
        this.setState({
            displayValue:
                value.charAt(0) === "-"
                    ? value.substr(1)
                    : "-" + value
        });
    }

    inputPercentage = () => {
        const { displayValue, value, operator } = this.state;
        const percentValue = String(parseFloat(displayValue) / 100);
        this.setState({
            displayValue: percentValue,
            value: operator !== "" ? value : percentValue,
            nextValue: operator !== "" ? percentValue : ""
        });
    }

    inputDot = () => {
        const { displayValue, value, nextValue, operator } = this.state;

        let result = String(displayValue);
        if (displayValue.indexOf(".") === -1) {
            result += '.'
        }
        this.setState({
            displayValue: result,
            value: operator !== "" ? value : result,
            nextValue: operator !== "" ? result : nextValue,
        })
    }

    performOperation = (sign) => {
        const { operator, value } = this.state;

        if (operator === "") {
            if (value > 0) {
                this.setState({
                    operator: sign
                });
            }
        }
        else {
            this.performEqual();
            this.setState({
                operator: sign
            });
        }
    }

    inputBack = () => {
        const { displayValue, value, nextValue, operator } = this.state;
        let result = displayValue.slice(0, -1);
        console.log(result)
        this.setState({
            displayValue: result === "" ? "0" : result,
            value: operator !== "" ? value : result,
            nextValue: operator !== "" ? result : nextValue
        });
    }

    render() {
        return (
            <div className="calculator">
                <Display displayValue={this.state.displayValue} />

                <div className="calculator-keypad">
                    <div className="left-keys">
                        <Functionkeys inputClear={this.inputClear} inputSign={this.inputSign} inputPercentage={this.inputPercentage} />
                        <Numberkeys inputDigit={this.inputDigit} inputDot={this.inputDot} inputBack={this.inputBack} />
                    </div>
                    <div className="right-keys">
                        <Operatorkeys performOperation={this.performOperation} performEqual={this.performEqual} />
                    </div>


                </div>

            </div>
        )
    }
}

export default Calculator;