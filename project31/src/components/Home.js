import React from 'react';
import firebase from '../firebase';
import TimesList from './times-list';
import AddTimeEntryForm from './add-time-entry-form';


const Home = () => {
	return (
		<div className='App'>
			<h1>Just clock it</h1>
			<TimesList />
			<AddTimeEntryForm />
			<button onClick={() => firebase.auth().signOut()}>Signout</button>
		</div>
	);
};

export default Home;