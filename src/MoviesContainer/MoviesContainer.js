import React from 'react';

const MoviesContainer = ({movies}) => {
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