import React, { Component } from "react";
import "./calendar.css";

class Dates extends Component {
  render() {
    
    const currentDate = new Date();
    
    // return an array containing rows
    const days = returnDays(currentDate.getMonth(), currentDate.getFullYear());
    
    // display on screen
    const displayDays = days.map((day, index) => {
        return (
            <div key={index} className="monthRow">
                {day}
            </div>
        )
    })
   

    function returnDays(month, year) {
        // an array containing arrays
        let days = [];
        var firstOfMonth = new Date(year, month, 1);
        var lastOfMonth = new Date(year, month+1, 0);
        var used = firstOfMonth.getDay() + lastOfMonth.getDate();
        let weeksNum = Math.ceil( used / 7);
        for (let i = 0; i < weeksNum; i++) {
            days.push([]);
        }

  

        // insert empty days
        var emptyDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        for (let i = 0; i < emptyDays; i++) {
            days[0].push(<div key={"empty" + i} className="date">X</div>);
        }

        // get all dates
        var c = 0;
    
            console.log("*" + new Date());
        for (var i = firstOfMonth; i <= lastOfMonth; i.setDate(i.getDate() + 1)) {
            let myDay = new Date(i);
            console.log(myDay);
            days[c].push(<button className={"date btn " + (myDay.getDate() === new Date().getDate() ? 'current': '')} key={i}>{myDay.getDate()}</button>)

            if (Object.keys(days[c]).length == 7) {
                c = c + 1;
            }
        }

        

        console.log(days);
        


        return days;

    }

    return (
        <div className="weekdays">
           {displayDays}
        </div>
    );
  }
}

export default Dates;