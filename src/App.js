import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import movies_search from './components/movies_search/movies_search.js';
import movies_details from './components/movies_details/movies_details.js';
import { movies } from './pages';
import movies_list from './components/movies_list/movies_list.js';
import movies_card from './components/movies_card/movies_card.js';

function App() {
  return (
    <Router>

        <Route exact path="/">
          <Link to='/movies'>Chercher </Link>
          <Link to='/movies_list'>LIST </Link>
        </Route>
        <Route exact path='/movies' component={movies} />

        <Route exact path='/movies_list' component={movies_list}>
        </Route>

    </Router>
  );
}

export default App;

