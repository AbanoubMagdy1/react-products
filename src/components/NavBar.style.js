import styled from 'styled-components';
import Container from './Container.style';

export default styled(Container)`
  display: flex;
  margin: 1rem auto;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .nav-links {
    a {
      text-decoration: none;
      color: #000;
      font-weight: 400;
      font-size: 1rem;
      position: relative;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      &.active-link {
        color: var(--c-primary);
        font-weight: 600;

        &::after {
          content: '';
          position: absolute;
          bottom: -20px;
          height: 1px;
          left: -5px;
          right: -5px;
          background-color: var(--c-primary);
        }
      }
    }
  }

  .fa-undo-alt {
    cursor: pointer;
    background: linear-gradient(316.98deg, #52d67a 16.88%, #5aee87 84.04%);
    color: white;
    padding: 0.3rem;
    box-shadow: 0 3px 0 0 var(--c-primary);
    clip-path: polygon(10% 0, 90% 0, 100% 100%, 0% 100%);
  }

  .dropdown {
    .currency-button {
      cursor: pointer;

      .fa-angle-down {
        transition: 0.3s transform;
        transform: ${props => (props.currencyShow ? 'rotate(180deg)' : '')};
      }
    }

    .dropdown-menu {
      position: absolute;
      bottom: 0;
      right: -1rem;
      transform: translateY(105%);
      z-index: 30;
      &.dropdown-currency {
        display: ${props => (props.currencyShow ? 'block' : 'none')};

        ul {
          list-style: none;
          box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
          background-color: #fff;

          li {
            cursor: pointer;
            padding: 0.5rem 1rem;

            &:hover {
              background-color: #f7f7f7;
            }
          }
        }
      }
    }
  }
`;
