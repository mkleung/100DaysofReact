import React, { useState, useEffect } from 'react';

import './CharPicker.scss';

const CharPicker = props => {
  // state = { characters: [], isLoading: false };

  const [loadedChars, setLoadedChars] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  // UseEffect with empty array [] at the end
  // is just the same as component did Mount
  useEffect(() => {
    setIsLoading(true);
    fetch('https://swapi.co/api/people')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(charData => {
        const selectedCharacters = charData.results.slice(0, 5);

        setIsLoading(false)
        setLoadedChars(
          selectedCharacters.map((char, index) => ({
            name: char.name,
            id: index + 1
          }))
        );
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [])

  let content = <p>Loading characters...</p>;

  if (
    !isLoading &&
    loadedChars &&
    loadedChars.length > 0
  ) {
    content = (
      <div className="select-wrapper">
        <select
          onChange={props.onCharSelect}
          value={props.selectedChar}
          className={props.side}
        >
          {loadedChars.map(char => (
            <option key={char.id} value={char.id}>
              {char.name}
            </option>
          ))}
        </select>
      </div>

    );
  } else if (
    !isLoading &&
    (!loadedChars || loadedChars.length === 0)
  ) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
}

export default CharPicker;
