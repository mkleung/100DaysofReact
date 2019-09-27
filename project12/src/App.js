import React from 'react';
import './App.css';
import MovieList from "./components/movielist"
import Nav from "./components/nav"
import { MovieProvider } from "./components/MovieContext"
import Addmovie from "./components/addmovie"
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
        <Addmovie />
      </div>
    </MovieProvider>

  );
}

export default App;
