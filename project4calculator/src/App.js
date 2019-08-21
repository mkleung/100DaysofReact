import React from 'react';
import Calculator from "./components/Calculator";
import './App.scss';


// 1. What state is there?
// 2. What does it change?

function App() {
  return (
    <div id="wrapper">
      <div id="app">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
