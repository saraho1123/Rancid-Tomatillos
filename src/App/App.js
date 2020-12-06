import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Header from '../Header/Header';
import SingleMovie from '../SingleMovie/SingleMovie';
import { getAllMoviesData, getSingleMovieData } from '../apiCalls.js'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      movies: [],
      errorAllMovies: '',
      movieDetails: null,
    }
  }

  componentDidMount = () => {
    getAllMoviesData()
      .then(moviesData => this.setState({ movies: moviesData.movies }))
      .catch(error => this.setState({ errrorAllMoves: error.message }));
  }
  
  displayMovieDetails = (id) => {
    this.getSingleMovie(id)
  }
  getSingleMovie = (id) => {
    getSingleMovieData(id)
      .then(singleMovieData => this.setState({ movieDetails: [singleMovieData.movie]  }))
  }

  returnToHome = () => {
    this.setState({ movieDetails: null })
  }

  render() {
    return (
      <main>
        <Header />
        {this.state.movieDetails ? 
          <SingleMovie movieDetails={this.state.movieDetails[0]} returnToHome={this.returnToHome} /> : 
          <MoviesContainer movies={this.state.movies} movieClicked={this.state.movieDetails} getMovieDetails={this.displayMovieDetails }  /*displaySingleMovie={this.displayMovieDetails}*/ />
        }
      </main>
    )
  }
}

export default App;
