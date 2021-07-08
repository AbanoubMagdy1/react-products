import React, { Component, createContext } from 'react';
import { addToCart, removeFromCart } from '../utils';
import { CurrenyContext } from './CurrencyProvider';

export const CartContext = createContext();

class CartProvider extends Component {
  static contextType = CurrenyContext;

  state = {
    cartItems: [],
  };

  handleAdd = (product, cb) => {
    this.setState(
      prevState => ({
        cartItems: addToCart(prevState.cartItems, product),
      }),
      () => {
        if (cb) cb();
      }
    );
  };

  handleRemove = product => {
    this.setState(prevState => ({
      cartItems: removeFromCart(prevState.cartItems, product),
    }));
  };

  totalItems = () => {
    return this.statecartItems.reduce((acc, cur) => acc + cur.amount, 0);
  };

  totalPrice = () => {
    return this.statecartItems.reduce(
      (acc, cur) => acc + cur.getPrice(this.context.chosenCurrency),
      0
    );
  };

  render() {
    const { cartItems } = this.state;
    return (
      <CartContext.Provider
        value={{
          cartItems,
          handleAdd: this.handleAdd,
          handleRemove: this.handleRemove,
          totalItems: this.totalItems,
          totalPrice: this.totalPrice,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export function withCart(Component) {
  return class withCart extends Component {
    render() {
      return (
        <CartContext.Consumer>
          {value => <Component {...value} {...this.props} />}
        </CartContext.Consumer>
      );
    }
  };
}

export default CartProvider;
