import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Header from '../Header/Header';
import SingleMovie from '../SingleMovie/SingleMovie';
import { getAllMoviesData } from '../apiCalls.js'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Error from '../Error/Error';
import RatingSearch from '../RatingSearch/RatingSearch';

class App extends Component {
  constructor () {
    super();
    this.state = {
      movies: [],
      error: '',
      movieDetails: null,
    }
  }

  componentDidMount = () => {
    getAllMoviesData()
      .then(moviesData => this.setState({ movies: moviesData.movies }))
      .catch(error => this.setState({ error: error.message }));
  }

  componentDidUpdate =() => {
    
  }
  getMoviesByRating = (event) => {
    const ratingMinMax = event.target.value;
    const range = ratingMinMax.split(",");
    const moviesInRange = this.props.movies.filter(movie => {
      return movie.rating >= ratingMinMax[0] && movie.rating <= ratingMinMax[1]
      // we want to pass in an array containing a minimum and maximum value in order to get movies with ratings within a range
    })
    this.setState({movies: moviesInRange})
  }

  render() {
    if(this.state.error) {
      return (
        <Route render={() =>
          <Error error={this.state.error} />
        }
        />
      )
    }
    return (
      <main>
        <Header />
        <RatingSearch movies={this.state.movies} getMoviesByRating={this.getMoviesByRating} />
        <Switch>
          <Route exact path='/' render={() => 
            <MoviesContainer movies={this.state.movies}  />
          }
          />
          <Route path='/:id' 
            render={({match}) => {
              return <SingleMovie id={parseInt(match.params.id)} />
            }
          }
          />
        </Switch>
      </main>
    )
  }
}

export default App;