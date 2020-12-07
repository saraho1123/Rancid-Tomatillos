import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoviesContainer from './MoviesContainer';

describe('MovieContainer', () => {
  it('should return movie cards on page load', () => {
    const mockedMovies = [
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
    ];

    const mockGetMovieDetails = jest.fn();
    
    render(
      <MoviesContainer
        movies={mockedMovies}
        getMovieDetails={mockGetMovieDetails}
      />
    )
    
    const moneyPlaneImage = screen.getByRole('img', { name: /money plane/i });
    const mulanImage = screen.getByRole('img', { name: /mulan/i });
    const rogueImage = screen.getByRole('img', { name: /rogue/i });
    
    expect(moneyPlaneImage).toBeInTheDocument();
    expect(mulanImage).toBeInTheDocument();
    expect(rogueImage).toBeInTheDocument();
  })
})