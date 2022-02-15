import {render} from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';
import Countries from './components/CountriesList';
import CountrySelector from './components/CountrySelector'

it('should render without error', () => {
    render(
      <MockedProvider mocks={[]}>
        <CountrySelector />
        <Countries />
      </MockedProvider>,
    );
  });