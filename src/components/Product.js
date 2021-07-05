import React, { Component } from 'react';

import StyledProdcut from './Product.style';
import { CurrenyContext } from '../contexts/CurrencyProvider';
import { currencySymbols } from '../utils';
import { Link } from 'react-router-dom';

class Product extends Component {
  static contextType = CurrenyContext;

  render() {
    const { name, inStock, gallery, prices, id } = this.props.product;
    const { chosenCurrency } = this.context;
    const price = prices.find(price => price.currency === chosenCurrency);
    const symbol = currencySymbols[chosenCurrency];
    return (
      <Link to={`/product/${id}`}>
        <StyledProdcut stock={inStock}>
          <div className="img-container">
            <img src={gallery[0]} alt={name} />
            <i className="fas fa-shopping-cart"></i>
            <p className="out-of-stock">Out of stock</p>
          </div>
          <p className="product-name">{name}</p>
          <p className="product-price">
            {symbol} {price.amount}
          </p>
        </StyledProdcut>
      </Link>
    );
  }
}

export default Product;
