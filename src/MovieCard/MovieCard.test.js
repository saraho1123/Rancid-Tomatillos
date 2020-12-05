import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  it('should return a movie card', () => {
    // setup
    // render of SingleCard, with mocked, id, image, title, rating, and displayMovieDetails
    // execution
    // 
    // assertion
    // we need assert that title and rating and an image are in the document
  })

  it('should take user to single movie when card is clicked', () => {
    // setup
     // render of SingleCard, with mocked, id, image, title, rating, and displayMovieDetails
    // execution
     // fireEvent or userEvent for onclick of MovieCard
    // assertion
     // expect movieContainer to singleMovie
  })
})