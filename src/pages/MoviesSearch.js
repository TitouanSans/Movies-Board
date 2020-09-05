import React from 'react';
import ApiMovies from '../components/API_Movies/ApiMovies.js';

const MoviesSearch = (props) => {

    let movieList = props.movies;

    return (
        <section>
            <h1>Recherche de Films</h1>
            {movieList.map((movie, index) => (
                <ApiMovies search={movie} key={index}/>
            ))}
        </section>
        
    )
}

export default MoviesSearch;