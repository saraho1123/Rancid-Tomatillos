import React from 'react';
import './MovieCard.css';

const MovieCard = ( {image, title, rating}) => {
  return (
    <section className="movie-card" onClick={ displayMovieDetails }>
      <div className="image-holder">
        <img className="card-image" src={image}/>
      </div>
      <h3 className="card-title">Movie Title: {title}</h3>
      <h3 className="rating">Movie Rating: {Math.round( rating * 10 ) / 10}</h3>
    </section>
  )
}

export default MovieCard