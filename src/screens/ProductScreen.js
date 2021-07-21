import React, { Component } from 'react';
import parse from 'html-react-parser';
import Container from './ProductScreen.style';
import ImageDisplay from '../components/ImageDisplay';
import Attribute from '../components/Attribute';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { withCart } from '../contexts/CartProvider';
import { withSnack } from '../contexts/SnackProvider';
import { CurrenyContext } from '../contexts/CurrencyProvider';
import {
  currencySymbols,
  allAttributesChosen,
  formatCartProduct,
  splitName,
} from '../utils';
import { getProducts } from '../queries';
import { graphql } from '@apollo/client/react/hoc';

class ProductScreen extends Component {
  static contextType = CurrenyContext;

  state = {
    product: {},
    attributes: {},
    initiated: false,
    amount: 1,
  };

  componentDidUpdate() {
    const { data, match } = this.props;
    const { initiated } = this.state;
    if (data.category && !initiated) {
      let product = data.category.products.find(p => p.id === match.params.id);
      const obj = {};
      if (product) {
        for (let a of product.attributes) {
          obj[a.id] = { type: a.type, choice: '' };
        }
      }
      this.setState({
        initiated: true,
        product: product || {},
        attributes: obj,
      });
    }
  }

  componentDidMount() {
    if (this.props.data.category) {
      this.forceUpdate();
    }
  }

  setAttribute = (id, choice) => {
    this.setState(prevState => ({
      attributes: {
        ...prevState.attributes,
        [id]: { ...prevState.attributes[id], choice },
      },
    }));
  };

  addToCart = () => {
    const { openSnack } = this.props;
    const { attributes, product, amount } = this.state;
    const cartProduct = formatCartProduct(
      product,
      attributes,
      amount < 1 ? 1 : Math.floor(amount)
    );
    this.props.handleAdd(cartProduct, amount, () => openSnack(product.name));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { product, amount } = this.state;
    const { name, gallery, description, attributes, inStock } = product;
    const { error, loading } = this.props.data;
    const [firstName, restName] = splitName(name);

    const { chosenCurrency } = this.context;
    const price = product.prices?.find(
      price => price.currency === chosenCurrency
    );
    const symbol = currencySymbols[chosenCurrency];

    return (
      <>
        {loading ? (
          <Loader />
        ) : error || !product.id ? (
          <Message>{error?.message || 'Product not found'}</Message>
        ) : (
          <Container>
            <ImageDisplay images={gallery} />
            <div className="product-info">
              <div className="product-name">
                <p className="firstname">{firstName}</p>
                <p className="restname">{restName}</p>
              </div>

              {attributes.map((attribute, i) => (
                <Attribute
                  key={i}
                  attribute={attribute}
                  setAttribute={this.setAttribute}
                  choice={this.state.attributes[attribute.id]?.choice || ''}
                />
              ))}

              <div className="product-price">
                <p className="price-text">Price:</p>
                <p className="price">
                  {symbol} {price.amount}
                </p>
              </div>
              {inStock && (
                <div className="product-amount">
                  <p>Quantity :</p>
                  <input
                    type="number"
                    name="amount"
                    min="1"
                    step="1"
                    value={amount}
                    onChange={this.handleChange}
                  />
                </div>
              )}
              <button
                className="btn btn-green"
                disabled={
                  !inStock || !allAttributesChosen(this.state.attributes)
                }
                onClick={this.addToCart}
              >
                Add to cart
              </button>
              <div className="product-description">{parse(description)}</div>
            </div>
          </Container>
        )}
      </>
    );
  }
}

export default withSnack(withCart(graphql(getProducts)(ProductScreen)));
