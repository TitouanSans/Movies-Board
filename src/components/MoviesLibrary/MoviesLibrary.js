import React from 'react';
import Movies from '../Movies/Movies.js';

const MoviesLibrary = (props) => {

    let moviesLibrary = props.movies;
    console.log(moviesLibrary);
    
    return (
        <section>
            <h1>Films</h1>
            {moviesLibrary.map((movie, index) => (
                <Movies movie={movie} key={index} />
            ))}
        </section>
    
    )
}

export default MoviesLibrary;