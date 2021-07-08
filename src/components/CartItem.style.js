import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid #e5e5e5;
  margin-bottom: 2rem;

  .item-left {
    .name {
      font-size: 1.875rem;

      .first-name {
        font-weight: 600;
        margin-bottom: 0.3rem;
      }
      .rest-name {
        font-weight: 400;
        margin-bottom: 0.3rem;
      }
    }

    .price {
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }

    .attributes {
      display: flex;
      align-items: center;
    }
  }

  .item-right {
    display: flex;
    .amount-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
