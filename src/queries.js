import { gql } from '@apollo/client';

const getProducts = gql`
  query GetCategory($type: CategoryInput) {
    category(input: $type) {
      products {
        name
        inStock
        category
        gallery
        description
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          amount
          currency
        }
      }
    }
  }
`;

const getCurrencies = gql`
  {
    currencies
  }
`;

export { getProducts, getCurrencies };
