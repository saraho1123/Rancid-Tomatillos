import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Header from '../Header/Header';
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
        <Header />
        <MoviesContainer movies={this.state.movies} />
      </main>
      
    )
  }
}

export default App;
