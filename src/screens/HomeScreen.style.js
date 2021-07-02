import styled from 'styled-components';
import Container from '../components/Container.style';

export default styled(Container)`
  h2 {
    font-size: 2rem;
    margin: 2rem 0;
  }

  .products-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
`;
