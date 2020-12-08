import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { getAllMoviesData, getSingleMovieData } from '../apiCalls';
jest.mock('../apiCalls.js');

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

  it('should return user to home when Return To All Movies button is clicked from a single movie', async () => {
    const mockGetAllMoviesData = jest.fn()
    // need to mock single movies!!
    getAllMoviesData.mockResolvedValueOnce([
      {
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.666666666666667,
        "release_date": "2020-09-29"
      },
      {
        "id": 337401,
        "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        "title": "Mulan",
        "average_rating": 4.909090909090909,
        "release_date": "2020-09-04"
      },
      {
        "id": 718444,
        "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
        "title": "Rogue",
        "average_rating": 6.428571428571429,
        "release_date": "2020-08-20"
      }
    ])
    render(<App />)

    const movieCard = screen.getByText('Rogue')
    fireEvent.click(movieCard)
    const returnButton = await waitFor(() => screen.getByText('Return To All Movies'))
    fireEvent.click(returnButton)

    expect(screen.getByText('Money Plane')).toBeInTheDocument()
    expect(returnButton).not.toBeInTheDocument()
  })
});
