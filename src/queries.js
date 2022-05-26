import { gql } from '@apollo/client';

const getProducts = gql`
  query GetCategory($type: CategoryInput) {
    category(input: $type) {
      products {
        id
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
          currency{
            label
            symbol
          }
        }
      }
    }
  }
`;

const getCurrencies = gql`
  {
    currencies{
      label
      symbol
    }
  }
`;

export { getProducts, getCurrencies };
