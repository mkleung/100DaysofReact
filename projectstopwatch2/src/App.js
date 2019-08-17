import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Timer from './components/Timer'
import Button from './components/Button'

function App() {
  
  return (
    <div className="container">
    <div className="container">
      <div className="jumbotron">
        <Timer />
      </div>
      </div>
    </div>
  );
}

export default App;
