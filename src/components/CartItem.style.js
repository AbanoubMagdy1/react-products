import styled from 'styled-components';

export const MainStyles = styled.div`
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
      margin: 0.8rem 0;
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

export const MiniStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  .item-left {
    .name {
      font-size: 1rem;
      font-weight: 300;
      color: #1d1f22;
      .first-name {
        margin-bottom: 0.3rem;
      }
      .rest-name {
        margin-bottom: 0.3rem;
      }
    }

    .price {
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      font-size: 1rem;
      margin: 0.8rem 0;
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
