import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { getProducts } from '../queries';
import { capitalize } from '../utils';
import Container from './HomeScreen.style';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';

class HomeScreen extends Component {
  render() {
    const { category, loading, error } = this.props.data;
    const { category: categorySearch } = this.props.match.params;
    return (
      <Container>
        {categorySearch && <h2>{capitalize(categorySearch)}</h2>}
        {loading ? (
          <Loader />
        ) : error || !category ? (
          <Message>{error?.message || 'No products found'}</Message>
        ) : (
          <div className="products-container">
            {category.products.map((product, i) => (
              <Product key={i} product={product} history={this.props.history} />
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
