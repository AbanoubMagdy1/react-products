import React, { Component } from 'react';
import StyledCart from './MiniCart.style';
import { MiniStyles } from '../components/CartItem.style';
import CartItem from '../components/CartItem';
import { withCart } from '../contexts/CartProvider';

export class MiniCart extends Component {
  render() {
    const { cartItems, totalItems, totalPrice } = this.props;

    return (
      <StyledCart>
        <p className="bag">
          <strong>My bag :</strong> {totalItems()} items
        </p>
        {cartItems.map((product, i) => (
          <MiniStyles key={i}>
            <CartItem
              product={product}
              handleAdd={this.props.handleAdd}
              handleRemove={this.props.handleRemove}
              mini={true}
            />
          </MiniStyles>
        ))}
        <div className="price-container">
          <p className="price-total">Total price</p>
          <p className="actual-price">{totalPrice()}</p>
        </div>
        <div className="btns-container">
          <button
            className="btn btn-white"
            onClick={() => this.props.history.push('/cart')}
          >
            View bag
          </button>
          <button className="btn btn-green">Check out</button>
        </div>
      </StyledCart>
    );
  }
}

export default withCart(MiniCart);
