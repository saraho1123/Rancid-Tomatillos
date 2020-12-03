import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Header from '../Header/Header';
import movieData from '../movie-data';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      movies: movieData.movies,
      movieDetails: [ ]
    }
  }
  displayMovieDetails = movies.filter(movie => { movie.id === cardId
    return (
      <SingleMovie
        id={movie.id}
        key={movie.id}
        image={movie.backdrop_path}
        title={movie.title}
        rating={movie.average_rating}
        releaseDate={movie.release_date}
        overview={movie.overview}
        genres={movie.genres}
        budget={movie.budget}
        revenue={movie.revenue}
        runTime={movie.runtime}
        tagline={movie.tagline}
      />
    )
})

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
