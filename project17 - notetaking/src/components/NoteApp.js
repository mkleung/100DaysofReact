import React, { useState, useEffect, useReducer, useContext } from 'react';
import notesReducer from '../reducers/notes-reducer'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'


const NoteApp = () => {

	const [ notes, dispatch ] = useReducer(notesReducer, []);
    const [ initTitle ] = useState('test');
    const [ initBody ] = useState('test');

	// constructor
	useEffect(() => {
		const notes = JSON.parse(localStorage.getItem('notes'));
	
		if (notes) {
			// setNotes(notesData)
			dispatch({ type: 'POPULATE_NOTES', notes });
		}
		else {
			console.log("init")
			dispatch({
				type  : 'ADD_NOTE',
				title: 'test',
				body: 'test'
			});
		}
	}, []);

	// component did update
	useEffect(
		() => {
			localStorage.setItem('notes', JSON.stringify(notes));
		},
		[ notes ]
	);

	return (
		<NotesContext.Provider value={{notes, dispatch}}>
			<h1>Notes</h1>
			<NoteList />
			<AddNoteForm />
		</NotesContext.Provider>
	);
};

export default NoteApp