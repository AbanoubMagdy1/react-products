import React, { Component } from 'react';
import StyledProdcut from './Product.style';
import { CurrenyContext } from '../contexts/CurrencyProvider';
import { currencySymbols, formatCartProduct } from '../utils';
import { withCart } from '../contexts/CartProvider';
import { withSnack } from '../contexts/SnackProvider';

class Product extends Component {
  static contextType = CurrenyContext;

  goToProductPage = () => {
    const { product, history } = this.props;
    history.push(`/product/${product.id}`);
  };

  addToCart = e => {
    e.stopPropagation();
    const { product, openSnack } = this.props;
    const cartProduct = formatCartProduct(product, {});
    this.props.handleAdd(cartProduct, 1, () => openSnack(product.name));
  };

  render() {
    const { name, inStock, gallery, prices, attributes } = this.props.product;
    const { chosenCurrency } = this.context;
    const price = prices.find(price => price.currency === chosenCurrency);
    const symbol = currencySymbols[chosenCurrency];
    return (
      <StyledProdcut stock={inStock} onClick={this.goToProductPage}>
        <div className="img-container">
          <img src={gallery[0]} alt={name} />
          {!attributes.length && (
            <i className="fas fa-shopping-cart" onClick={this.addToCart}></i>
          )}
          <p className="out-of-stock">Out of stock</p>
        </div>
        <p className="product-name">{name}</p>
        <p className="product-price">
          {symbol} {price.amount}
        </p>
      </StyledProdcut>
    );
  }
}

export default withSnack(withCart(Product));
