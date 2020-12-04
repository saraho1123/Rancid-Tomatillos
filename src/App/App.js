import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Header from '../Header/Header';
import SingleMovie from '../SingleMovie/SingleMovie';
import movieData from '../movie-data';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      movies: movieData.movies,
      movieDetails: [],
    }
  }
  
  displayMovieDetails = (id) => {
    const singleMovie = this.state.movies.filter(movie => movie.id === id);
    this.setState({ movieDetails: singleMovie })

    console.log(singleMovie) 
    console.log(this.state.movieDetails)
  }

  returnToHome = () => {
    this.setState({ movieDetails: [] } )
  }

  render() {
    return (
      <main>
        <Header />
        {this.state.movieDetails.length > 0 ? 
          <SingleMovie movieDetails={this.state.movieDetails[0]} returnToHome={this.returnToHome} /> : 
          <MoviesContainer movies={this.state.movies} movieClicked={this.state.movieDetails} displaySingleMovie={this.displayMovieDetails} />
        }
      </main>
    )
  }
}

export default App;
