import styled from 'styled-components';

export default styled.div`
  width: ${props => props.dim || '100px'};
  height: ${props => props.dim || '100px'};
  margin: 100px auto;
  border-radius: 50%;
  background: conic-gradient(#333 300deg, #fff 60deg);
  position: relative;
  animation: rotate 1s infinite linear;

  .inner {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    left: 10px;
    right: 10px;
    top: 10px;
    bottom: 10px;
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
