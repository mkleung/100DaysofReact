import React, { Component } from "react";
import "./calendar.css";
import Weekdaylabels from "./Weekdaylabels"
import Dates from "./Dates"

class Calendar extends Component {
  render() {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    return (
        <div>
            <h1>{month}</h1>
            <div>
                <Weekdaylabels />
            </div>
            <div>
                <Dates />
            </div>
        </div>
    );
  }
}

export default Calendar;