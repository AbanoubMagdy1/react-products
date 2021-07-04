import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import client from './ApolloClient';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import CurrencyProvider from './contexts/CurrencyProvider';

ReactDOM.render(
  <ApolloProvider client={client}>
    <CurrencyProvider>
      <Router>
        <App />
      </Router>
    </CurrencyProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
