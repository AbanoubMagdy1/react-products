import styled from 'styled-components';

export default styled.div`
  margin: 1.5rem 0;
  position: relative;

  .name {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.125rem; /*18px*/
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  small {
    position: absolute;
    bottom: 0;
    transform: translateY(115%);
  }

  .choices {
    display: flex;

    .box {
      font-family: 'Source Sans Pro', sans-serif;
      border: 1px solid black;
      padding: 0.6rem;

      &:not(.chosen) {
        cursor: pointer;
      }

      &:not(:last-child) {
        margin-right: 0.8rem;
      }

      &.text.chosen {
        color: white;
        background-color: #1d1f22;
      }
      &.swatch {
        border: none;
        border-radius: 50%;
        transition: 0.3s transform;
        padding: 1.2rem;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: 50%;
          background-color: #111;
          transition: 0.3s transform;
          z-index: -1;
        }
      }
      &.swatch.chosen::before {
        transform: scale(1.3);
      }
    }
  }
`;
