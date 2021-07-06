import styled from 'styled-components';
import Container from '../components/Container.style';

export default styled(Container)`
  display: grid;
  grid-template-columns: repeat(9, 1fr);

  .product-info {
    grid-column: 4 span;
    .product-name {
      font-size: 1.875rem; /*30px*/

      .firstname {
        font-weight: 600;
      }
      .restname {
        font-weight: 400;
      }
    }

    .product-price {
      font-weight: 700;
      margin: 2rem 0;

      .price-text {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 1.125rem; /*18px*/
      }

      .price {
        font-size: 1.5rem;
      }
    }

    .product-description {
      margin-top: 2rem;
      font-weight: 400;
      font-size: 1rem;
      font-family: Roboto, sans-serif;

      h1,
      h3 {
        margin: 0.5rem 0;
      }

      h1 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.2rem;
      }

      ul {
        list-style: none;

        li {
          &::before {
            content: '- ';
          }
        }
      }
    }
  }
`;
