import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.scss';

const data = [
	{ id: 0, img: './img/dog1.jpg' },
	{ id: 1, img: './img/dog2.jpg' },
	{ id: 2, img: './img/dog3.jpg' },
	{ id: 3, img: './img/dog4.jpg' },
	{ id: 4, img: './img/dog1.jpg' },
	{ id: 5, img: './img/dog2.jpg' },
	{ id: 6, img: './img/dog3.jpg' },
	{ id: 7, img: './img/dog4.jpg' }
];

function App(){
	const [ cards, setCards ] = useState([]);
	const [ first, setFirst ] = useState();
  const [ second, setSecond ] = useState();
  const [count, setCount] = useState(1);

	// Component did mount
	useEffect(() => {
		setCards(data);
	}, []);



  const handleClick = (id) => {

    setCount(count => count+1);

    if (count % 2 === 0) {      
      setSecond(id)
    }

    if (Math.abs(count % 2) == 1) {
      setSecond()
      setFirst(id)
    }


  
  }

    useEffect(() => {

      let f = cards.find(card => card.id === first )
      let s = cards.find(card => card.id === second)
  
      if (f !== undefined && s !== undefined) {
        if (f.img === s.img) {
          console.log("win")

          setCards(cards.filter(card => card.img !== f.img ))
        }
      }
   
	});

  
	return (
		<div className='App '>
			<Header />
      <p>Count: {count}</p>
      <p>first: {first} / Second: {second}</p>
     
			<div className='board'>
				<div className='container'>
					<div className='row'>
						{cards.map((card) => (
							<div key={card.id} className='col-3'>
								<div className='gameCard' onClick={()=>handleClick(card.id)}>
									<div className='flip-card'>
										<div className={card.id === first || card.id === second ? 'flip-card-inner active': 'flip-card-inner'}>
											<div className='flip-card-front'>
												<h1>{card.id}</h1>
											</div>
											<div
                      className='flip-card-back cardImage'
												style={{ backgroundImage: 'url(' + card.img + ')' }}
											/>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
