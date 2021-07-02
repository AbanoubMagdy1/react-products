import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import client from './ApolloClient';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
