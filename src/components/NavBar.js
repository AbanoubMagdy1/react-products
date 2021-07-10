import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Container from './NavBar.style';
import Loader from './Loader';
import MiniCart from './MiniCart';
import { capitalize } from '../utils';
import { NavLink } from 'react-router-dom';
import { CurrenyContext } from '../contexts/CurrencyProvider';
import { currencySymbols } from '../utils';
import { withCart } from '../contexts/CartProvider';

const categories = ['clothes', 'tech'];

class Navbar extends Component {
  static contextType = CurrenyContext;

  state = {
    currencyShow: false,
    cartShow: false,
    navColored: false,
  };

  changeBackground = () => {
    const { navColored } = this.state;
    if (window.pageYOffset > 0 && !navColored) {
      this.setState({ navColored: true });
    } else if (window.pageYOffset == 0 && navColored) {
      this.setState({ navColored: false });
    }
  };

  componentDidMount() {
    document.addEventListener('scroll', this.changeBackground);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.changeBackground);
  }

  goBack = () => {
    this.props.history.goBack();
  };

  toggleCurrency = () => {
    this.setState(prevState => ({
      currencyShow: !prevState.currencyShow,
      cartShow: false,
    }));
  };

  toggleCart = () => {
    this.setState(prevState => ({
      currencyShow: false,
      cartShow: !prevState.cartShow,
    }));
  };

  changeCurrency = currency => {
    this.context.setCurrency(currency);
    this.setState({ currencyShow: false });
  };

  render() {
    const { currencies, chosenCurrency } = this.context;
    const symbol = currencySymbols[chosenCurrency];
    const totalItems = this.props.totalItems();
    return (
      <Container
        currencyShow={this.state.currencyShow}
        cartShow={this.state.cartShow}
        navColored={this.state.navColored}
      >
        <div className="container">
          <div className={`overlay ${this.state.cartShow && 'show'}`}></div>
          <div className="nav-links">
            {categories.map((category, i) => (
              <NavLink
                key={i}
                to={`/${category}`}
                activeClassName="active-link"
              >
                {capitalize(category)}
              </NavLink>
            ))}
          </div>

          <i className="fas fa-undo-alt" onClick={this.goBack}></i>

          <div className="dropdown">
            <span className="icon" onClick={this.toggleCurrency}>
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

            <span className="icon" onClick={this.toggleCart}>
              <i className="fas fa-shopping-cart"></i>
              {totalItems ? <span className="badge">{totalItems}</span> : ''}
            </span>
            <div className="dropdown-menu dropdown-cart">
              <MiniCart
                history={this.props.history}
                toggleCart={this.toggleCart}
              />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(withCart(Navbar));
