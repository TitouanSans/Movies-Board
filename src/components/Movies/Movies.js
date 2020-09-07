import React from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';

const Movies = (props) => {

    let movies = props.movie;

    return (
        <section>
            
            <img className='img-responsive' src={movies.poster} alt={movies.title} />

            <div>
                <p className='title'>{movies.title}</p>
                <p>{movies.release_date}</p>
                <p>{movies.description}</p>
            </div>
        </section>
        
    )
}

export default Movies;