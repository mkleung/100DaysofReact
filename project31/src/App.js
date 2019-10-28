import React from 'react';
import firebase from './firebase'
import TimesList from './components/times-list'
import './App.css';

import AddTimeEntryForm from './components/add-time-entry-form'

//test
// firebase.firestore().collection("times").add({
//   title: 'test',
//   time_seconds: 45
// })

function App() {
  return (
    <div className="App">
      <h1>Just clock it</h1>
      <TimesList />
      <AddTimeEntryForm />
    </div>
  );
}

export default App;
