import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from './MovieCard';
import { Router, MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from "history";


describe('MovieCard', () => {
  it('should correctly render a movie card', () => {

    render(
      <MemoryRouter>
        <MovieCard 
          id="1234"
          image='https://someimage.png'
          title='The Best Movie'
          rating='10'
        />
      </MemoryRouter>
    )

    const sampleMovieCardTitle = screen.getByText('The Best Movie');

    expect(sampleMovieCardTitle).toBeInTheDocument();
  })

  it('should route user to a specific movie when a movie card is clicked', async () => {      
    const herstory = createMemoryHistory()

    render(
    <Router history={herstory}>
      <MovieCard 
        id={1234}
        image='https://someimage.png'
        title='The Best Movie'
        rating='10'
      />
    </Router>
    )

    const displayMovieCard = await waitFor(() => screen.getByText('The Best Movie'));
    userEvent.click(displayMovieCard)

    expect(herstory.location.pathname).toBe('/1234')
  })
})