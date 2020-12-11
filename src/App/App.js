import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Header from '../Header/Header';
import SingleMovie from '../SingleMovie/SingleMovie';
import { getAllMoviesData } from '../apiCalls.js'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Error from '../Error/Error';

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

  returnToHome = () => {
    this.setState({ movieDetails: null })
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