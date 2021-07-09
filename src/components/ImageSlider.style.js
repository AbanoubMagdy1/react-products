import styled from 'styled-components';

export default styled.div`
  width: ${props => (props.mini ? '4rem' : '8rem')};
  height: 100%;
  overflow: hidden;
  margin-left: 0.5rem;
  position: relative;

  .slider-container {
    display: flex;
    width: 100%;
    height: 100%;
    transition: 0.3s transform;
    transform: ${props => `translateX(-${props.count * props.width}px)`};

    &.return {
      transition: none;
    }
  }

  i {
    cursor: pointer;
    position: absolute;
    background: transparent;
    color: black;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;

    &.fa-angle-left {
      left: 3px;
    }
    &.fa-angle-right {
      right: 3px;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
