import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
// no need to import other components for integration testing as app already has those components imported and the child components that were imported into its children

describe('App', () => {
  it('should take user to movie cards view when return to home button is clicked', () => {
    // setup
    // render app with all components, with singleMovie displayed and mocked returntohome
    // execution
    // fireEvent or userEvent for onclick of Return to home button
    // assertion
    // expect movieContainer to show cards
 })

 it('should take user to single movie when card is clicked', () => {
  // setup
   // render of SingleCard, with mocked, id, image, title, rating, and displayMovieDetails
  // execution
   // fireEvent or userEvent for onclick of MovieCard
  // assertion
   // expect movieContainer to singleMovie
})
});
