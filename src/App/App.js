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
      moviesByRating: [],
    }
  }

  componentDidMount = () => {
    getAllMoviesData()
      .then(moviesData => this.setState({ movies: moviesData.movies }))
      .catch(error => this.setState({ error: error.message }));
  }

  getMoviesByRating = (ratingMinMax) => {
    const range = ratingMinMax.split(","); 
    const moviesInRange = this.state.movies.filter(movie => {
      return movie.average_rating >= +range[0] && movie.average_rating <= +range[1]
    })
    if (moviesInRange.length === 0) {
      this.setState({moviesByRating: ["NaN"]})
    } else {
      this.setState({moviesByRating: moviesInRange})
    }
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
        <Switch>
          <Route exact path='/sarah-chadrick-Rancid-Tomatillos' render={() => 
            <section>
              <RatingSearch getMoviesByRating={this.getMoviesByRating} />
              <MoviesContainer movies={this.state.movies} moviesByRating={this.state.moviesByRating} />
            </section>
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