import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import client from './ApolloClient';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import CurrencyProvider from './contexts/CurrencyProvider';
import CartProvider from './contexts/CartProvider';
import SnackProvider from './contexts/SnackProvider';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <CurrencyProvider>
        <CartProvider>
          <SnackProvider>
            <App />
          </SnackProvider>
        </CartProvider>
      </CurrencyProvider>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
