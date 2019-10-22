import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.scss';

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
  
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
  
	  // And swap it with the current element.
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
  
	return array;
  }
  
const data = [
	{ id: 0, img: './img/dog1.jpg', correct: false },
	{ id: 1, img: './img/dog2.jpg', correct: false },
	{ id: 2, img: './img/dog3.jpg', correct: false },
	{ id: 3, img: './img/dog4.jpg', correct: false },
	{ id: 4, img: './img/dog1.jpg', correct: false },
	{ id: 5, img: './img/dog2.jpg', correct: false },
	{ id: 6, img: './img/dog3.jpg', correct: false },
	{ id: 7, img: './img/dog4.jpg', correct: false }
];

function App(){
	const [ cards, setCards ] = useState([]);
	const [ first, setFirst ] = useState();
	const [ second, setSecond ] = useState();
	const [ count, setCount ] = useState(1);

	// Component did mount
	useEffect(() => {
		setCards(shuffle(data));

	}, []);

	const handleClick = (id) => {
		setCount((count) => count + 1);
		if (count % 2 === 0) {
			setSecond(id);
		}
		if (Math.abs(count % 2) == 1) {
			setSecond();
			setFirst(id);
		}
	};


	// Determine Win
	useEffect(() => {
		let firstSelected = cards.find((card) => card.id === first);
		let secondSelected = cards.find((card) => card.id === second);
		if (firstSelected !== undefined && secondSelected !== undefined) {
			// win
			if (firstSelected.img === secondSelected.img) {
				for (let i = 0; i < cards.length; i++) {
					if ((cards[i].id === firstSelected.id) || (cards[i].id === secondSelected.id)) {
						cards[i].correct = true;
					}
				}
			}
		}
	});

	return (
		<div className='App '>
			<Header />
			<div className='board'>
				<div className='container'>
					<div className='row'>
						{cards.map((card) => (
							<div key={card.id} className='col-3'>
								<div className='gameCard' onClick={() => handleClick(card.id)}>
									<div className='flip-card'>
										<div
											className={
												card.id === first || card.id === second || card.correct  ? (
													'flip-card-inner active'
												) : (
													'flip-card-inner'
												)
											}>
											<div className='flip-card-front'>
												<h1>{card.id}</h1>
											</div>
											<div
												className=
												{
													card.correct ? "flip-card-back cardImage correct": "flip-card-back cardImage"
												}
												style={{ backgroundImage: 'url(' + card.img + ')' }}
											>
										
											</div>
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
