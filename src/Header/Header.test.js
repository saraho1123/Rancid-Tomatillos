import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render a header when page loads', () => {
    render(
      <Header/>
    )
   
    const heading = screen.getByText('Rancid Tomatillos Movie Ratings');
    
    expect(heading).toBeInTheDocument();
  })
})