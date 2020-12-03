import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import SingleMovie from '../SingleMovie/SingleMovie';
import './MoviesContainer.css';

const MoviesContainer = ({movies}, event) => {
    const movieCards = movies.map(movie => {
        return (
            <MovieCard 
                id={movie.id}
                key={movie.id}
                image={movie.poster_path}
                title={movie.title}
                rating={movie.average_rating}
            />
        )
    })


      return (
        cardId === movie.id ?
        <section className='single-movie'>
          {displayMovieDetails}
        </section> :
    
        <section className='movies-container'>
            {movieCards}
        </section>
    )
}

export default MoviesContainer;