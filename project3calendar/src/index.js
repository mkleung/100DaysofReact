import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="container">100 Days of React - Project 3 Calender</h1>
      </div>
      <div className="container">
        <Calendar />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
