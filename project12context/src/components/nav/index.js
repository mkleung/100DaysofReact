
import React, { useContext } from 'react';
import { MovieContext } from "../MovieContext"

const Nav = props => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <React.Fragment>
            <div>
                <h3>Name</h3>
                <p>List of movies: {movies.length}</p>
            </div>
        </React.Fragment>
    )
}
export default Nav;
