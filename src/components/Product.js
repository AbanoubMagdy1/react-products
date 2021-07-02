import React, { Component } from 'react';
import StyledProdcut from './Product.style';

/*name
      inStock
      category
      gallery
      attributes {
        type
      }
      prices{
        amount
        currency*/

class Product extends Component {
  render() {
    const { name, inStock, gallery, prices } = this.props.product;
    return (
      <StyledProdcut stock={inStock}>
        <div className="img-container">
          <img src={gallery[0]} alt={name} />
          <i className="fas fa-shopping-cart"></i>
          <p className="out-of-stock">Out of stock</p>
        </div>
        <p className="product-name">{name}</p>
        <p className="product-price">{prices[0].amount}</p>
      </StyledProdcut>
    );
  }
}

export default Product;
