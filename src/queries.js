import { gql } from '@apollo/client';

const getProducts = gql`
  query GetCategory($type: CategoryInput) {
    category(input: $type) {
      products {
        name
        inStock
        category
        gallery
        attributes {
          type
        }
        prices {
          amount
          currency
        }
      }
    }
  }
`;

export { getProducts };
