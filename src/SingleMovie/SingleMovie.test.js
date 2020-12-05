import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import SingleMovie from './SingleMovie';

describe('SingleMovie', () => {
  // before each
  it('should return details for a single movie', () => {
    // setup
    // create mock const for movieDetails with an array of one movie object
    // give mock function to returnToHome, if we can use it here (?)
    // we need to render SingleMovie, making sure to include the movieDetails and returnHome in the render
    // execution
    // 
    // assertion
    // assert that all the movie details and existing inner text display with 
    // use of expect toBeInTheDocuments
  })

  // Integration test for app
  it('should take user to movie cards view when return to home button is clicked', () => {
     // setup
     // render single movie with movieDetails and mocked returntohome
     // execution
     // fireEvent or userEvent for onclick of Return to home button
     // assertion
     // expect movieContainer to show cards
  })
})