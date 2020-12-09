import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import App from './App';
import { getAllMoviesData, getSingleMovieData } from '../apiCalls';
import { MemoryRouter } from 'react-router';
import { memo } from 'react';
jest.mock('../apiCalls.js');

// no need to import other components for integration testing as app already has those components imported and the child components that were imported into its children

describe('App', () => {
  it('should dispay movie cards on page load', async () => {
    getAllMoviesData.mockResolvedValueOnce(
      {'movies': [
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
      ]}
    )

    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    )

    const moneyPlaneCard = await waitFor(() => screen.getByText('Money Plane'))
    const mulanCard = await waitFor(() => screen.getByText('Mulan'))
    const rogueCard = await waitFor(() => screen.getByText('Rogue'))

    expect(moneyPlaneCard).toBeInTheDocument();
    expect(mulanCard).toBeInTheDocument();
    expect(rogueCard).toBeInTheDocument();
 })

  it('should take user to single movie when card is clicked', async () => {
    // setup
    getAllMoviesData.mockResolvedValueOnce(
      {'movies': [
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
      ]}
    )

    getSingleMovieData.mockResolvedValueOnce({
      "movie": {
        "id": 718444,
        "title": "Rogue",
        "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
        "release_date": "2020-08-20",
        "overview": "Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels.",
        "genres": [
            "Action"
        ],
        "budget": 0,
        "revenue": 0,
        "runtime": 106,
        "tagline": "When the hunter becomes the prey.",
        "average_rating": 6.428571428571429,
      }
    })
    
    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    )

    const movieCardRogue = await waitFor(() => screen.getByText('Rogue'));
    fireEvent.click(movieCardRogue)

    const singleMovie = await waitFor(() => screen.getByText('Tagline: When the hunter becomes the prey.'))
    expect(singleMovie).toBeInTheDocument()
  })

  it('should return user to home when Return To All Movies button is clicked from a single movie', async () => {
    // need to mock single movies!!
    getAllMoviesData.mockResolvedValueOnce(
      {'movies': [
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
      ]}
    )

    getSingleMovieData.mockResolvedValueOnce({
      "movie": {
        "id": 718444,
        "title": "Rogue",
        "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
        "release_date": "2020-08-20",
        "overview": "Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels.",
        "genres": [
            "Action"
        ],
        "budget": 0,
        "revenue": 0,
        "runtime": 106,
        "tagline": "When the hunter becomes the prey.",
        "average_rating": 6.428571428571429,
      }
    })
    
    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    )
    
    const movieCardRogue = await waitFor(() => screen.getByText('Rogue'));
    
    userEvent.click(movieCardRogue)
     
    const returnButton = await waitFor(() => screen.getByText('◀Return to All Movies'))
    
    fireEvent.click(returnButton)

    expect(screen.getByText('Money Plane')).toBeInTheDocument()
    expect(returnButton).not.toBeInTheDocument()
  })
  
});
