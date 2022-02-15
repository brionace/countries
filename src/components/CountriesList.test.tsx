import {render} from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';
import Countries from './CountriesList';

it('should render without error', () => {
    render(
      <MockedProvider mocks={[]}>
        <Countries />
      </MockedProvider>,
    );
  });