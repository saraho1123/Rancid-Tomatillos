import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  it('should correctly render a movie card', () => {

    render(<MovieCard 
      id={1234}
      image='https://someimage.png'
      title='The Best Movie'
      rating='10'
      getMovieDetails={jest.fn()}
      />)

    const sampleMovieCardTitle = screen.getByText('The Best Movie');

    expect(sampleMovieCardTitle).toBeInTheDocument();
  })

  it('should call displayMovieDetails with correct id', () => {      

    const mockDisplayMovieDetails = jest.fn();
    render(<MovieCard 
      id={1234}
      image='https://someimage.png'
      title='The Best Movie'
      rating='10'
      getMovieDetails={mockDisplayMovieDetails}
      />)

    const displayMovieCard = screen.getByAltText('The Best Movie')
    fireEvent.click(displayMovieCard)

    expect(mockDisplayMovieDetails).toHaveBeenCalledWith(1234);
  })
})