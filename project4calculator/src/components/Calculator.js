import React from "react";
import "./calculator.scss";

class Calculator extends React.Component {
    render() {
        return (
            <div className="calculator">
                <div className="calculator-display">10</div>

                <div className="calculator-keypad">

                    <div className="left-keys">

                        <div className="function-keys">
                            <button className="calculator-key key-clear">AC</button>
                            <button className="calculator-key key-sign">+/-</button>
                            <button className="calculator-key key-percent">%</button>
                        </div>

                        <div className="digit-keys">
                            <button className="calculator-key key-0">0</button>
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
                    </div>

                    <div className="right-keys">
                        <button className="calculator-key key-divide">/</button>
                        <button className="calculator-key key-multiply">x</button>
                        <button className="calculator-key key-subtract">-</button>
                        <button className="calculator-key key-add">+</button>
                        <button className="calculator-key key-equal">=</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
