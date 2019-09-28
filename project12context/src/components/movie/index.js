import React, { useState } from 'react';
const Movie = ({ name, price }) => {

    return (
        <React.Fragment>
            <h3>{name}</h3>
            <p>${price}</p>
        </React.Fragment>
    )
}
export default Movie;
