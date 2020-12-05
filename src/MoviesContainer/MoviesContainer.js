import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
// import SingleMovie from '../SingleMovie/SingleMovie';
import './MoviesContainer.css';

const MoviesContainer = ({movies, displaySingleMovie}) => {
    const movieCards = movies.map(movie => {
        return (
            <MovieCard 
                id={movie.id}
                key={movie.id}
                image={movie.poster_path}
                backdrop={movie.backdrop_path}
                title={movie.title}
                rating={movie.average_rating}
                displayMovieDetails={displaySingleMovie}
                movieClicked={movieClicked}
            />
        )
    })
      return (
        <section className='movies-container'>
            {movieCards}
        </section>
    )
}

export default MoviesContainer;