import React from 'react';
import './MovieCard.css';

const MovieCard = ( {image, title, rating}) => {
  return (
    <section className="movie-card">
      <div className="image-holder">
        <img className="card-image" src={image}/>
      </div>
      <h3 className="card-title">Movie Title: {title}</h3>
      <h3 className="rating">Movie Rating: {rating}</h3>
    </section>
  )
}

export default MovieCard