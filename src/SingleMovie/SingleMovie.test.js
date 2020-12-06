import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom'
import SingleMovie from './SingleMovie';

describe('SingleMovie', () => {
  it('should render details for a single movie', () => {
    const movie = {
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
  
   const mockReturnToHome = jest.fn();
    
    render(
      <SingleMovie
        movieDetails={movie}
        returnToHome={mockReturnToHome}
      />
    )

    const image = screen.getByRole('img', { name: /money plane/i });
    const title = screen.getByRole('heading', { name: /money plane/i });
    const overview = screen.getByRole('heading', { name: /overview: a professional thief with \$40 million in debt and his family's life on the line must commit one final heist \- rob a futuristic airborne casino filled with the world's most dangerous criminals\./i });
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(overview).toBeInTheDocument();
  }) 
  
  it('should invoke return to home method when Return To Home button is clicked', () => {
    const movie = {
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
  
    const mockReturnToHome = jest.fn();

    render(
    <SingleMovie
      movieDetails={movie}
      returnToHome={mockReturnToHome}
    />
    )
 
    const returnButton = screen.getByText('Return To All Movies');

    fireEvent.click(returnButton);

    expect(mockReturnToHome).toHaveBeenCalledWith();
 })
})