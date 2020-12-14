import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import RatingSearch from './RatingSearch';
import { MemoryRouter } from 'react-router';

describe('RatingSearch', () => {
  it('should render a dropdown button', () => {
    const mockedGetMoviesByRating = jest.fn();

    render(
      <MemoryRouter>
        <RatingSearch
          getMoviesByRating={mockedGetMoviesByRating}
        />
      </MemoryRouter>
    )
    
    const dropdownButton = screen.getByText('Search Movies By Rating');
    
    expect(dropdownButton).toBeInTheDocument();
  })

  it('should call getMoviesByRating with correct argument when user clicks on a dropdown option', async () => {
    const mockedGetMoviesByRating = jest.fn();

    render(
      <MemoryRouter>
        <RatingSearch
          getMoviesByRating={mockedGetMoviesByRating}
        />
      </MemoryRouter>
    )
    const dropdownButton = screen.getByText('Search Movies By Rating');

    fireEvent.click(dropdownButton);

    const optionDropdownText = await waitFor(() => screen.getByText('3-4'));
  
    fireEvent.click(optionDropdownText);


    expect(mockedGetMoviesByRating).toHaveBeenCalledWith("3,4");
  })
})