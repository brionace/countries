import {render} from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';
import Countries from './components/CountriesList';
import CountrySelector from './components/CountrySelector'

// Todo: extend test to be more meaningful and use Jest, Enzyme, Cypress for end-to-end

it('should render components without error', () => {
    render(
      <MockedProvider mocks={[]}>
        <CountrySelector />
        <Countries />
      </MockedProvider>,
    );
  });
