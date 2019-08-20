import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './components/Calendar'

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

export default App;
