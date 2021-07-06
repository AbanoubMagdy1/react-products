import React, { Component, createContext } from 'react';
import { addToCart, removeFromCart } from '../utils';

export const CartContext = createContext();

class CartProvider extends Component {
  state = {
    cartItems: [],
  };

  handleAdd = product => {
    this.setState(prevState => ({
      cartItems: addToCart(prevState.cartItems, product),
    }));
  };

  handleRemove = product => {
    this.setState(prevState => ({
      cartItems: removeFromCart(prevState.cartItems, product),
    }));
  };

  render() {
    const { cartItems } = this.state;
    return (
      <CartContext.Provider
        value={{
          cartItems,
          handleAdd: this.handleAdd,
          handleRemove: this.handleRemove,
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
