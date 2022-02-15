import React from 'react';
import { render } from 'react-dom';
import '@fontsource/roboto';
import './index.css';
import App from './App';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider } 
from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
