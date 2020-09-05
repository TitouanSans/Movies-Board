import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { MyMovies, MoviesSearch } from './pages';

function App() {

  const [movies, setMovies] = useState([]);
  
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/movies')
      .then((result) => {
        console.log(result.data);
        setMovies(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=b7fea8404c333c0cfdaf616952854d32')
      .then((result) => {
        console.log(result.data);
        setSearch(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <Router>
      <div>
        <nav>
            <Link to="/"><button>Mes Films</button></Link>
            <Link to='/MoviesSearch'><button>Ajouter des films</button></Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <MyMovies movies={movies} />
          </Route>
          <Route exact path='/MoviesSearch'>
            <MoviesSearch movies={search} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
