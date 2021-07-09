import React, { Component } from 'react';
import StyledCart from './CartScreen.style';
import { MainStyles } from '../components/CartItem.style';
import CartItem from '../components/CartItem';
import { withCart } from '../contexts/CartProvider';

export class CartScreen extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <StyledCart>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <h3>Your don't have any items in your cart yet</h3>
        ) : (
          <>
            {cartItems.map((product, i) => (
              <MainStyles key={i}>
                <CartItem
                  product={product}
                  handleAdd={this.props.handleAdd}
                  handleRemove={this.props.handleRemove}
                  mini={false}
                />
              </MainStyles>
            ))}
          </>
        )}
      </StyledCart>
    );
  }
}

export default withCart(CartScreen);
