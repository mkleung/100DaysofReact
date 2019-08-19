import React from 'react';
import moment from 'moment'
import './calendar.css'

export default class Calendar extends React.Component {

    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false
    }

    constructor(props) {
        super(props);
        this.width = props.width || "350px";
        this.style = props.style || {};
    }



    weekdays = moment.weekdays(); // Monday
    weekdaysShort = moment.weekdaysShort(); // Mon
    months = moment.months();

    year = () => {
        return this.state.dateContext.format('Y');
    }

    month = () => {
        return this.state.dateContext.format('MMMM');
    }

    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }

    currentDate = () => {
        return this.state.dateContext.get('date');
    }

    currentDay = () => {
        return this.state.dateContext.format('D');
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    }

    render() {

        // Show weekday
        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <td key={day} className="week-day">{day}</td>
            )
        })

        let firstRow = [];

        // show empty slots
        let emptySlots = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++){
            emptySlots.push(<td key = {"empty"+ i} className="emptySlot">{""}</td>);
        }

        firstRow = [...emptySlots];
        let secondRow = [];
        let thirdRow = [];
        let fourthRow = [];
        let fifthRow = [];

        // show calendar days

        for (let i = 1;i <= this.daysInMonth(); i++) {
            let className = (i === this.currentDate() ? "day current" : "day");
            
            if (i <= (7 - emptySlots.length)) {
                firstRow.push(
                    <td key={i} className={className}>
                        <span>{i}</span>
                    </td>
                )
         
            }
            else if ((i > 7) && (i < 15)) {
                secondRow.push(
                    <td key={i} className={className}>
                        <span>{i}</span>
                    </td>
                )
            }
            else if ((i > 14) && (i < 22)) {
                thirdRow.push(
                    <td key={i} className={className}>
                        <span>{i}</span>
                    </td>
                )
            }
            else if ((i > 21) && (i < 29)) {
                fourthRow.push(
                    <td key={i} className={className}>
                        <span>{i}</span>
                    </td>
                )
            }
            else {
                fifthRow.push(
                    <td key={i} className={className}>
                        <span>{i}</span>
                    </td>
                )
            }
            
        }
   
        return (
            <div>
                
                <div className="container">
                    <h2 className="text-center">{this.month()}</h2>
                    <table className="calendar">
                        <thead>
                            <tr className="calendar-header"></tr>
                        </thead>
                        <tbody>
                            <tr>{weekdays}</tr>
                            <tr>{firstRow}</tr>
                            <tr>{secondRow}</tr>
                            <tr>{thirdRow}</tr>
                            <tr>{fourthRow}</tr>
                            <tr>{fifthRow}</tr>
                          
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}