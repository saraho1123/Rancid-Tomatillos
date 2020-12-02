import React from 'react';

const MovieCard = ( {image, title, rating}) => {
  return (
    <section className="movie-card">
      <img className="card-image" src={image}/>
      <h2 className="card-title">Movie Title: {title}</h2>
      <h3 className="rating">Movie Rating: {rating}</h3>
    </section>
  )
}

export default MovieCard