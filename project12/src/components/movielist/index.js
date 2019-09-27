
import React, { useContext } from 'react';
import Movie from "../movie"
import { MovieContext } from "../MovieContext"
const MovieList = () => {
    const [movies] = useContext(MovieContext)
    return (
        <React.Fragment>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Movie
                            name={movie.name}
                            price={movie.price} />
                    </li>
                ))}

            </ul>
        </React.Fragment>
    )
}
export default MovieList;
