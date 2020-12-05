import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Header from '../Header/Header';
import SingleMovie from '../SingleMovie/SingleMovie';
// import movieData from '../movie-data';
import { getAllMoviesData, getSingleMovieData } from '../apiCalls.js'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      movies: [],
      errorAllMovies: '',
      movieDetails: [],
    }
  }

  componentDidMount = () => {
    getAllMoviesData()
    // fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    //   .then(response => response.json())
      .then(moviesData => this.setState({ movies: moviesData.movies }))
      .catch(error => this.setState({ errrorAllMoves: error.message }));
  }
  
  displayMovieDetails = (id) => {
    const singleMovie = this.state.movies.filter(movie => movie.id === id)
    this.setState({ movieDetails: singleMovie })
  }

  returnToHome = () => {
    this.setState({ movieDetails: [] })
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
