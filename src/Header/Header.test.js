import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render a header when page loads', () => {
    // setup
    render(
      <Header/>
    )
    // assertion
    const heading = screen.getByText('Rancid Tomatillos Movie Ratings');
    
    expect(heading).toBeInTheDocument();
    // we want to look for 'Rancid Tomatillos Movie ratiangs' in the document
  })
})