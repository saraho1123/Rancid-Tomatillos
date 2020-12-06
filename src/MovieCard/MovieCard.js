import React from 'react';
import './MovieCard.css';

const MovieCard = ( {id, image, title, rating, getMovieDetails}) => {
  return (
    <section className="movie-card" onClick={() => {getMovieDetails(id)} }>
      <div className="image-holder">
        <img className="card-image" src={image} alt={title}/>
      </div>
      <h3 className="card-title">{title}</h3>
      <h3 className="rating">Rating: {Math.round( rating * 10 ) / 10}</h3>
    </section>
  )
}

export default MovieCard