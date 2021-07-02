import styled from 'styled-components';

export default styled.div`
  color: #1d1f22;
  padding: 1rem;
  transition: box-shadow 0.3s;
  opacity: ${props => (props.stock ? 1 : 0.3)};

  &:hover {
    box-shadow: ${props => (props.stock ? '0 0 10px 1px #777' : 'none')};

    .img-container .fa-shopping-cart {
      opacity: ${props => (props.stock ? 1 : 0)};
    }
  }

  .img-container {
    height: 300px;
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
      transform: translateY(50%);
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
      font-size: 1.1rem;
    }
  }

  .product-name {
    font-weight: 300;
    margin: 0.5rem 0;
  }
`;
