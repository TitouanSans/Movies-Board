import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import movies_search from './components/movies_search/movies_search.js';
import movies_details from './components/movies_details/movies_details.js';
import { movies } from './pages';

function App() {
  return (
    <Router>
        <Route exact path="/">
          <Link to='/movies'>Chercher</Link>
        </Route>
        <Route exact path='/movies' component={movies} />
    </Router>
  );
}

export default App;

