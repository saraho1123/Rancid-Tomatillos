import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css';

const MoviesContainer = ({ movies, moviesByRating }) => {
  if (moviesByRating[0] === "NaN") {
    return (
      <h1 className="no-movies">There are no movies with this rating range. <br/> Please choose a different range.</h1>
    )
  } else if (moviesByRating.length > 0) {
    const filteredMovies = moviesByRating.map(movie => {
      return (
        <MovieCard 
          id={movie.id}
          key={movie.id}
          image={movie.poster_path}
          backdrop={movie.backdrop_path}
          title={movie.title || "There are no movies with this rating."} 
          rating={movie.average_rating}
        />
      )
    })
    return (
      <section className='movies-container'>
        {filteredMovies}
      </section>
    )
  } else {
    const movieCards = movies.map(movie => {
      return (
        <MovieCard 
          id={movie.id}
          key={movie.id}
          image={movie.poster_path}
          backdrop={movie.backdrop_path}
          title={movie.title}
          rating={movie.average_rating}
        />
      )
    })
    return (
      <section className='movies-container'>
        {movieCards}
      </section>
    )
  }
}

export default MoviesContainer;