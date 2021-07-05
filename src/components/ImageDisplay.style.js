import styled from 'styled-components';

export default styled.div`
  grid-column: 5 span;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  .images-container {
    grid-column: 1 span;
    display: flex;
    flex-direction: column;

    .image-container {
      height: 5rem;
      &.clickable {
        cursor: pointer;
      }
      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .main-image {
    grid-column: 4 span;
    position: relative;
    margin: 0 2rem;
    height: 25rem;

    .main-layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &.above-image {
        opacity: 0;

        &.above-displayed {
          transition: 0.6s opacity ease-in;
          opacity: 1;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
