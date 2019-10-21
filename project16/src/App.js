import React, { useState } from 'react';
import Card  from './components/card'
import './App.css';

function App() {

  const [flipped, setFlipped] = useState([])
  
  const handleClick = (id) => {
    setFlipped([...flipped, id])
  }

  return (
    <div className="App">
        <h2>Can you remember where the card are?</h2>
        <Card 
          id={1} 
          width={100} 
          height={100} 
          back={`/img/back.png`} 
          front={`/img/dog1.JPG`}
          flipped={flipped.includes(1)}
          handleClick={() => handleClick(1)}>
        </Card>
    </div>
  );
}

export default App;
