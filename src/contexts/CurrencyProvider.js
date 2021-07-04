import React, { Component, createContext } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { getCurrencies } from '../queries';

export const CurrenyContext = createContext();

const chosenCurrency = 'chosenCurrency';

function getChosenCurrency() {
  return localStorage.getItem(chosenCurrency);
}

class CurrencyProvider extends Component {
  state = {
    currencies: [],
    chosenCurrency: getChosenCurrency() || 'USD',
  };

  setCurrency = currency => {
    this.setState({ chosenCurrency: currency }, () => {
      localStorage.setItem(chosenCurrency, currency);
    });
  };

  componentDidUpdate() {
    const { currencies } = this.props.data;
    if (currencies && this.state.currencies.length === 0) {
      this.setState({ currencies });
    }
  }
  render() {
    const { currencies, chosenCurrency } = this.state;

    return (
      <CurrenyContext.Provider
        value={{ currencies, chosenCurrency, setCurrency: this.setCurrency }}
      >
        {this.props.children}
      </CurrenyContext.Provider>
    );
  }
}

export default graphql(getCurrencies)(CurrencyProvider);
