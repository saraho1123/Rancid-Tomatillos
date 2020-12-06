import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MovieCard from './MovieCard';
import { getAllMoviesData, getSingleMovieData } from '../apiCalls.js'
jest.mock('../apiCalls.js');


describe('MovieCard', () => {
  it('should correctly render a movie card', () => {
    // SETUP
    render(<MovieCard 
      id={1234}
      image='https://someimage.png'
      title='The Best Movie'
      rating='10'
      getMovieDetails={jest.fn()}
      />)

    // EXECUTION
    const sampleMovieCardTitle = screen.getByText('The Best Movie');

    // ASSERTION
    expect(sampleMovieCardTitle).toBeInTheDocument();
  })

  it('should call displayMovieDetails with correct id', () => {      
    // SETUP
    const mockDisplayMovieDetails = jest.fn();
    render(<MovieCard 
      id={1234}
      image='https://someimage.png'
      title='The Best Movie'
      rating='10'
      getMovieDetails={mockDisplayMovieDetails}
      />)

    // EXECUTION
    const displayMovieCard = screen.getByAltText('The Best Movie')
    fireEvent.click(displayMovieCard)

    // ASSERTION
    expect(mockDisplayMovieDetails).toHaveBeenCalledWith(1234);
  })
})