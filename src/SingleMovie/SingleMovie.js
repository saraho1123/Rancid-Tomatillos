import React, {Component} from 'react'
import './SingleMovie.css';
import { getSingleMovieData } from '../apiCalls.js'

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state= {
      movieDetails: [],
    }
  }

  componentDidMount = () => {
    this.displayMovieDetails(this.props.id)
  }
  displayMovieDetails = (id) => {
    this.getSingleMovie(id)
  }
  getSingleMovie = (id) => {
    getSingleMovieData(id)
      .then(singleMovieData => {
        this.setState({ movieDetails: singleMovieData.movie  })
        console.log(singleMovieData);
      })
  }

  render() {
    return (
      <section className="single-movie">
        <div className="backdrop-holder">
          <img className="backdrop-image" src={this.state.movieDetails.backdrop_path} alt={this.state.movieDetails.title}/>
        </div>
        <div className="movie-details-holder">
          <h3 className="card-title">{this.state.movieDetails.title}</h3>
          <h3 className="rating">Rating: {Math.round( this.state.movieDetails.average_rating * 10 ) / 10}</h3>
          <h3 className="release-date">Release Date: {this.state.movieDetails.release_date}</h3>
          <h3 className="overview">Overview: {this.state.movieDetails.overview}</h3>
          <h3 className="genres">Genres: {this.state.movieDetails.genres}</h3>
          <h3 className="budget">Budget: ${this.state.movieDetails.budget}.00</h3>
          <h3 className="revenue">Revenue: ${this.state.movieDetails.revenue}.00</h3>
          <h3 className="runTime">Run-Time: {this.state.movieDetails.runtime} minutes</h3>
          <h3 className="tagline">Tagline: {this.state.movieDetails.tagline}</h3>
        </div>
        <button type="button" className="return-to-home-button" onClick={() => {this.props.returnToHome()}}>Return To All Movies</button>
      </section>
    )
  }
}

export default SingleMovie;