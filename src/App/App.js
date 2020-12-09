import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Header from '../Header/Header';
import SingleMovie from '../SingleMovie/SingleMovie';
import { getAllMoviesData } from '../apiCalls.js'
import './App.css';
import { Route } from 'react-router-dom'

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

  returnToHome = () => {
    this.setState({ movieDetails: null })
  }

  render() {
    return (
      <main>
        <Header />
        <Route exact path='/' render={() => 
          <MoviesContainer movies={this.state.movies}  />
        }
        />
        <Route path='/:id' 
          render={({match}) => {
            return <SingleMovie id={parseInt(match.params.id)}  returnToHome={this.returnToHome} />
          }
        }
          />
      </main>
    )
  }
}

export default App;