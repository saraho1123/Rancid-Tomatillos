import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import SingleMovie from '../SingleMovie/SingleMovie';
import './MoviesContainer.css';

const MoviesContainer = ({movies}) => {
    const displayMovieDetails = () => {
        const filteredMovie = movies.filter(movie => movie.id === id);
        return (
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
        )
    }
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
        <section className='movies-container'>
            {movieCards}
        </section>
    )
}

export default MoviesContainer;