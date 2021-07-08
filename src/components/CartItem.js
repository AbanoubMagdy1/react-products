import React, { PureComponent } from 'react';
import StyledItem from './CartItem.style';
import ImageSlider from './ImageSlider';
import Box from './Box';
import { splitName, currencySymbols } from '../utils';
import { CurrenyContext } from '../contexts/CurrencyProvider';

export class CartItem extends PureComponent {
  static contextType = CurrenyContext;

  handleIncrease = () => {
    this.props.handleAdd(this.props.product);
  };
  handleDecrease = () => {
    this.props.handleRemove(this.props.product);
  };

  render() {
    const { chosenCurrency } = this.context;
    const { product } = this.props;
    const symbol = currencySymbols[chosenCurrency];
    const [firstName, restName] = splitName(product.name);

    return (
      <StyledItem>
        <div className="item-left">
          <div className="name">
            <p className="first-name">{firstName}</p>
            <p className="rest-name">{restName}</p>
          </div>
          <p className="price">
            {symbol} {product.getPrice(chosenCurrency)}
          </p>
          <div className="attributes">
            {Object.keys(product.attributes).map(key => (
              <Box key={key} attr={product.attributes[key]} />
            ))}
          </div>
        </div>
        <div className="item-right">
          <div className="amount-container">
            <button
              className="btn btn-white btn-sm"
              onClick={this.handleIncrease}
            >
              +
            </button>
            <span className="amount">{product.amount}</span>
            <button
              className="btn btn-white btn-sm"
              onClick={this.handleDecrease}
            >
              -
            </button>
          </div>
          <ImageSlider images={product.gallery} />
        </div>
      </StyledItem>
    );
  }
}

export default CartItem;
