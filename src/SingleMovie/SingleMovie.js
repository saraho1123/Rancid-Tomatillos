import React from 'react'
import './SingleMovie.css';

const SingleMovie = ({ movieDetails, returnToHome }) => {
  return (
    <section className="single-movie">
      <div className="backdrop-holder">
        <img className="backdrop-image" src={movieDetails.backdrop_path} alt={movieDetails.title}/>
      </div>
      <div className="movie-details-holder">
        <h3 className="card-title">{movieDetails.title}</h3>
        <h3 className="rating">Rating: {Math.round( movieDetails.average_rating * 10 ) / 10}</h3>
        <h3 className="release-date">Release Date: {movieDetails.release_date}</h3>
        <h3 className="overview">Overview: {movieDetails.overview}</h3>
        <h3 className="genres">Genres: {movieDetails.genres}</h3>
        <h3 className="budget">Budget: ${movieDetails.budget}.00</h3>
        <h3 className="revenue">Revenue: ${movieDetails.revenue}.00</h3>
        <h3 className="runTime">Run-Time: {movieDetails.runtime} minutes</h3>
        <h3 className="tagline">Tagline: {movieDetails.tagline}</h3>
        </div>
      <button type="button" className="return-to-home-button" onClick={() => {returnToHome()}}>Return To All Movies</button>
    </section>
  )
}

export default SingleMovie;