import React, { Component } from "react";
import "./calendar.css";

const days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

class Labels extends Component {
  render() {
    
    
    const weekdayLabels = days.map((label, index) => {
        return (
            <div className="weeklyLabel" key={index}>{label}</div>
        )
    });

    return (
        <div className="weekdayLabels">
           {weekdayLabels}
        </div>
    );
  }
}

export default Labels;