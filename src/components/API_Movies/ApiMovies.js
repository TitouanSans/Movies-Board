import React from 'react';
import { Link } from 'react-router-dom';

const Movies = (props) => {

    let movie = props.movie;

    return (
        <section>
            <Link to='/details'>
                <img className='img-responsive' src={movie.poster} alt={movie.title} />
            </Link>
            <div>
                <p className='title'>{movie.title}</p>
                <p>{movie.release_date}</p>
                <p>{movie.description}</p>

                <div>
                    <Link to='/edit'><button>Editer</button></Link>
                    <Link to='/erase'><button>Supprimer</button></Link>
                </div>
            </div>
        </section>
        
    )
}

export default Movies;