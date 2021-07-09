import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;

  .bag {
    margin: 0.6rem 0;
  }

  .products-container {
    max-height: 15rem;
    overflow-y: scroll;
  }

  .price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price-total {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      margin: 1rem 4rem 1rem 0;
    }

    .actual-price {
      font-weight: 700;
    }
  }

  .btns-container {
    display: flex;
    justify-content: space-between;

    .btn:not(:last-child) {
      margin-right: 0.5rem;
    }

    .btn {
      padding: 0.5rem;
      font-size: 0.875rem; //14px
    }
  }
`;
