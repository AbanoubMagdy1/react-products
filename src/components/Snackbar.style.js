import styled from 'styled-components';

export default styled.div`
  position: fixed;
  left: 2rem;
  bottom: -4rem;
  width: auto;
  padding: 0.8rem;
  background-color: #4caf50;
  color: white;
  border-radius: 10px;
  transition: 0.3s transform;
  z-index: 1000;

  &.open {
    transform: translateY(-6rem);
  }

  a {
    text-decoration: underline;
  }
`;
