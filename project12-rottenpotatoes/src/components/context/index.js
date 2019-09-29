import React from "react";

const MovieContext = React.createContext({});

export const MoviesProvider = MovieContext.Provider;
export const MovieConsumer = MovieContext.Consumer;
export default MovieContext;
