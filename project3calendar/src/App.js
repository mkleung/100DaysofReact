import React from 'react';
import './App.css';
import Calendar from './Components/Calendar';


const style = {
  position: "relative",
  margin: "50px auto"
}

function App() {
  return (
    <div>
        <div className="jumbotron">
            <h2>Calendar</h2>
        </div>
      <Calendar style={style} width="302px" />
    </div>
  );
}

export default App;
