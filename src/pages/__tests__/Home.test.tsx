/* eslint-disable react/react-in-jsx-scope */
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import Home from '../../pages/Home';

describe('Home component tests', () => {
  test('Home component is accessible', async () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
