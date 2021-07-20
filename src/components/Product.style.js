import styled from 'styled-components';

export default styled.div`
  color: #1d1f22;
  padding: 1rem;
  transition: box-shadow 0.3s;
  opacity: ${props => (props.stock ? 1 : 0.3)};
  cursor: 'pointer';
  &:hover {
    box-shadow: ${props =>
      props.stock ? '0px 4px 35px rgba(168, 172, 176, 0.19)' : 'none'};

    .img-container .fa-shopping-cart {
      opacity: ${props => (props.stock ? 1 : 0)};
    }
  }

  .img-container {
    aspect-ratio: 1/1;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    .fa-shopping-cart {
      position: absolute;
      background-color: #5ece7b;
      color: #fff;
      border-radius: 50%;
      right: 10px;
      bottom: 0;
      transform: translateY(40%);
      padding: 0.6rem;
      opacity: 0;
      transition: 0.3s opacity;
    }

    .out-of-stock {
      display: ${props => (props.stock ? 'none' : 'block')};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-transform: uppercase;
      font-size: 1.5rem;
      white-space: nowrap;
    }
  }

  .product-name {
    font-weight: 300;
    margin: 0.5rem 0;
  }
`;
