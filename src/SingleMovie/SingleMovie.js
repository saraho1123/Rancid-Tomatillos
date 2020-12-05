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
        <h3 className="rating">Movie Rating: {Math.round( movieDetails.average_rating * 10 ) / 10}</h3>
        <h3 className="release-date">Release Date: {movieDetails.release_date}</h3>
        <h3 className="overview">Movie Overview: {movieDetails.overview}</h3>
        <h3 className="genres">Genres: {movieDetails.genres}</h3>
        <h3 className="budget">Movie Budget: {movieDetails.budget}</h3>
        <h3 className="revenue">Movie Revenue: {movieDetails.revenue}</h3>
        <h3 className="runTime">Movie Length: {movieDetails.runTime}</h3>
        <h3 className="tagline">Movie Tagline: {movieDetails.tagline}</h3>
        </div>
      <button type="button" className="return-to-home-button" onClick={() => {returnToHome()}}>Return To All Movies</button>
    </section>
  )
}

export default SingleMovie;

/*
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
*/