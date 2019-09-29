import React, { Component } from "react";
import "./calendar.css";
import Weekdaylabels from "./Weekdaylabels";
import Dates from "./Dates";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.updateDate.bind(this);
    this.state = { selectedDate: new Date() };
  }

  updateDate(dateArg) {
    this.setState({ selectedDate: dateArg });
  }

  render() {
    var updateDate = this.updateDate;
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    return (
      <div>
        <h1>{month}</h1>
        <div className="row">
          <Weekdaylabels />
        </div>
        <div className="datesContainer">
          <Dates updateDate={updateDate.bind(this)} />
        </div>
        <hr />
        <div>
          Selected Date: {this.state.selectedDate.getMonth()}/{""}
          {this.state.selectedDate.getDate()}/{""}
          {this.state.selectedDate.getYear()}
        </div>
        <hr />
      </div>
    );
  }
}

export default Calendar;
