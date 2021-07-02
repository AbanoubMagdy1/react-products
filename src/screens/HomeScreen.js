import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { getProducts } from '../queries';
import Container from './HomeScreen.style';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';

function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}

class HomeScreen extends Component {
  render() {
    console.log(this.props.data);
    const { category, loading, error } = this.props.data;
    const { category: categorySearch } = this.props.match.params;
    return (
      <Container>
        {categorySearch && <h2>{capitalize(categorySearch)}</h2>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error.message}</Message>
        ) : (
          <div className="products-container">
            {category.products.map((product, i) => (
              <Product key={i} product={product} />
            ))}
          </div>
        )}
      </Container>
    );
  }
}

export default graphql(getProducts, {
  options: props => ({
    variables: {
      type: {
        title: props.match.params.category || '',
      },
    },
  }),
})(HomeScreen);
