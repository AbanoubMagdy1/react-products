import React, { Component } from 'react';
import parse from 'html-react-parser';
import Container from './ProductScreen.style';
import ImageDisplay from '../components/ImageDisplay';
import Attribute from '../components/Attribute';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { CurrenyContext } from '../contexts/CurrencyProvider';
import { currencySymbols } from '../utils';
import { getProducts } from '../queries';
import { graphql } from '@apollo/client/react/hoc';

function splitName(name) {
  if (typeof name != 'string') return [null, null];
  let spaceIndex = name.indexOf(' ');
  if (spaceIndex !== -1) {
    return [name.slice(0, spaceIndex), name.slice(spaceIndex)];
  }
  return [name, null];
}

class ProductScreen extends Component {
  static contextType = CurrenyContext;

  state = {
    product: {},
    attributes: {},
    initiated: false,
  };

  componentDidUpdate() {
    const { data, match } = this.props;
    const { initiated } = this.state;
    if (data.category && !initiated) {
      let product = data.category.products.find(p => p.id === match.params.id);
      console.log(product, data.category.products);
      const obj = {};
      if (product) {
        for (let a of product.attributes) {
          obj[a.id] = { type: a.type, choice: '' };
        }
      }
      this.setState({ initiated: true, product, attributes: obj });
    }
  }

  componentDidMount() {
    if (this.props.data.category) {
      this.forceUpdate();
    }
  }

  setAttribute = (id, choice) => {
    this.setState(
      prevState => ({
        attributes: {
          ...prevState.attributes,
          [id]: { ...prevState.attributes[id], choice },
        },
      }),
      () => console.log(this.state)
    );
  };

  render() {
    const { product } = this.state;
    const { name, gallery, description, attributes } = product;
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
              <button className="btn btn-green">Add to cart</button>
              <div className="product-description">{parse(description)}</div>
            </div>
          </Container>
        )}
      </>
    );
  }
}

export default graphql(getProducts)(ProductScreen);
