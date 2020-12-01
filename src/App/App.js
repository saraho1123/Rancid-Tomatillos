import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import movieData from '../movie-data';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main>
        <header>
          <h1>Rancid Tomatillos Movie Ratings</h1>
        </header>
        <MoviesContainer movies={this.state.movies} />
      </main>
      
    )
  }
}

export default App;
