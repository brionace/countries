import {render} from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';
import CountrySelector from './CountrySelector'

it('should render without error', () => {
    render(
      <MockedProvider mocks={[]}>
        <CountrySelector />
      </MockedProvider>,
    );
  });