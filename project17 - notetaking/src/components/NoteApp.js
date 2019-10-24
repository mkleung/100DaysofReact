import React, { useState, useEffect, useReducer, useContext } from 'react';
import notesReducer from '../reducers/notes-reducer'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'
import "./styles.scss"

const NoteApp = () => {

	const [ notes, dispatch ] = useReducer(notesReducer, []);

	const [theme, setTheme] = useState('light')

	const changeDark = () => {
		setTheme("dark")
	}

	const changeLight = () => {
		setTheme("light")
	}

	useEffect(() => {
		document.body.classList.remove('dark', 'light')
		document.body.classList.add(theme)
	}, [theme]);

	// constructor
	useEffect(() => {
		const notes = JSON.parse(localStorage.getItem('notes'));
	
		if (notes) {
			// setNotes(notesData)
			dispatch({ type: 'POPULATE_NOTES', notes });
		}
		else {
			dispatch({
				type  : 'ADD_NOTE',
				title: 'test',
				body: 'test'
			});
		}

		document.body.classList.add(theme)
	}, []);

	// component did update
	useEffect(
		() => {
			localStorage.setItem('notes', JSON.stringify(notes));
		},
		[ notes ]
	);

	return (
		<NotesContext.Provider value={{notes, theme, dispatch}}>
			<h1>Notes</h1>
			<NoteList />
			<AddNoteForm />
			<button onClick={()=>{setTheme("dark")}}>Dark</button>
			<button onClick={()=>{setTheme("light")}}>light</button>
		</NotesContext.Provider>
	);
};

export default NoteApp