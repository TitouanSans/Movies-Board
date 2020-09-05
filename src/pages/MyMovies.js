import React from 'react';
import Movies from '../components/Movies/Movies.js';

const MyMovies = (props) => {

    let movieList = props.movies;

    return (
        <section>
            <h1>Ma liste de Films</h1>
            {movieList.map((movie, index) => (
                <Movies movie={movie} key={index}/>
            ))}
        </section>
        
    )
}

export default MyMovies;