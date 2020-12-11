import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Error from './Error';

describe('Error', () => {
  it('should render an error message', () => {
    const mockError = 'Failed to Fetch';

    render(
      <Error
        error={mockError}
      />
    )
      const errorMessage = screen.getByText('Failed to Fetch');

      expect(errorMessage).toBeInTheDocument();
  })
})