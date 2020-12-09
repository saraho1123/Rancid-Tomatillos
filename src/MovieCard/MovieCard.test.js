import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from './MovieCard';
import { MemoryRouter } from 'react-router';

describe('MovieCard', () => {
  it('should correctly render a movie card', () => {

    render(
      <MemoryRouter>

        <MovieCard 
        id={1234}
        image='https://someimage.png'
        title='The Best Movie'
        rating='10'
        getMovieDetails={jest.fn()}
        />
      </MemoryRouter>
    )

    const sampleMovieCardTitle = screen.getByText('The Best Movie');

    expect(sampleMovieCardTitle).toBeInTheDocument();
  })

  it.skip('should call display movies with correct id', () => {      
    /*
    We are pretty sure we need a unit test here, but we need to do more 
    research on how to test a button that uses <Link>
    */
    const mockDisplayMovieDetails = jest.fn();
    render(
    <MemoryRouter>
      <MovieCard 
        id={1234}
        image='https://someimage.png'
        title='The Best Movie'
        rating='10'
        getMovieDetails={mockDisplayMovieDetails}
        />
    </MemoryRouter>
    )

    const displayMovieCard = screen.getByAltText('The Best Movie')
    fireEvent.click(displayMovieCard)

    expect(mockDisplayMovieDetails).toHaveBeenCalledWith(1234);
  })
})