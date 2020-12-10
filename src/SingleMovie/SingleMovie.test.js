import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SingleMovie from './SingleMovie';
import { MemoryRouter } from 'react-router';
import { getSingleMovieData } from '../apiCalls.js';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from "history";
jest.mock('../apiCalls.js');


describe('SingleMovie', () => {
  it('should render details for a single movie', async () => {
    getSingleMovieData.mockResolvedValueOnce({
      "movie": {
        "id": 694919,
        "title": "Money Plane",
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "release_date": "2020-09-29",
        "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        "genres": [
          "Action"
        ],
        "budget": 0,
        "revenue": 0,
        "runtime": 82,
        "tagline": "",
        "average_rating": 6.666666666666667
      }
    })
  
   const mockReturnToHome = jest.fn();
    
    render(
      <MemoryRouter>
        <SingleMovie
          id="694919"
          returnToHome={mockReturnToHome}
          />
      </MemoryRouter>
    )

    const image = await waitFor(() => screen.getByRole('img', { name: /money plane/i }));
    const title = await waitFor(() => screen.getByRole('heading', { name: /money plane/i }));
    const overview = await waitFor(() => screen.getByRole('heading', { name: /overview: a professional thief with \$40 million in debt and his family's life on the line must commit one final heist \- rob a futuristic airborne casino filled with the world's most dangerous criminals\./i }));
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(overview).toBeInTheDocument();
  }) 
  
  it('should route user to home page when Return To Home button is clicked', async () => {
    const herstory = createMemoryHistory()
    getSingleMovieData.mockResolvedValueOnce({
      "movie": {
        "id": 694919,
        "title": "Money Plane",
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "release_date": "2020-09-29",
        "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        "genres": [
          "Action"
        ],
        "budget": 0,
        "revenue": 0,
        "runtime": 82,
        "tagline": "",
        "average_rating": 6.666666666666667
      }
    })
      
    render(
      <MemoryRouter history={herstory}>
        <SingleMovie
          id="694919"
          />
      </MemoryRouter>
    )
  
    const returnButton = await waitFor(() => screen.getByText('◀Return to All Movies'));
    userEvent.click(returnButton)

    expect(herstory.location.pathname).toBe('/')
  })
})