import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Container from './NavBar.style';
import Loader from './Loader';
import { capitalize } from '../utils';
import { NavLink } from 'react-router-dom';
import { CurrenyContext } from '../contexts/CurrencyProvider';
import { currencySymbols } from '../utils';

const categories = ['clothes', 'tech'];

class Navbar extends Component {
  static contextType = CurrenyContext;

  state = {
    currencyShow: false,
    cartShow: false,
  };

  goBack = () => {
    this.props.history.goBack();
  };

  toggleCurrency = () => {
    this.setState(prevState => ({
      currencyShow: !prevState.currencyShow,
      cartShow: false,
    }));
  };

  changeCurrency = currency => {
    this.context.setCurrency(currency);
    this.setState({ currencyShow: false });
  };

  render() {
    const { currencies, chosenCurrency } = this.context;
    const symbol = currencySymbols[chosenCurrency];
    return (
      <Container currencyShow={this.state.currencyShow}>
        <div className="nav-links">
          {categories.map((category, i) => (
            <NavLink key={i} to={`/${category}`} activeClassName="active-link">
              {capitalize(category)}
            </NavLink>
          ))}
        </div>
        <i className="fas fa-undo-alt" onClick={this.goBack}></i>
        <div className="dropdown">
          <span className="currency-button" onClick={this.toggleCurrency}>
            {symbol} <i className="fas fa-angle-down"></i>
          </span>
          <div className="dropdown-menu dropdown-currency">
            {currencies ? (
              <ul>
                {currencies.map((currency, i) => (
                  <li
                    key={currency}
                    onClick={this.changeCurrency.bind(this, currency)}
                  >
                    {currencySymbols[currency]} {currency}
                  </li>
                ))}
              </ul>
            ) : (
              <Loader dim="50px" />
            )}
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Navbar);
