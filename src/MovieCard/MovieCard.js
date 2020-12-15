import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ( {id, image, title, rating }) => {
  return (
    <Link to={`/${id}`} className="movie-card-link">
      <section className="movie-card" >
        <div className="image-holder">
          <img className="card-image" src={image} alt={title}/>
        </div>
        <div className="card-details">
          <h2 className="card-title">{title}</h2>
          <h3 className="rating">Rating: {Math.round( rating * 10 ) / 10}</h3>
        </div>
      </section>
    </Link>
  )
}

export default MovieCard
