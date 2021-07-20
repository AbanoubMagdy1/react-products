import styled from 'styled-components';

export default styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  transition: 0.3s background-color;
  background-color: ${props => (props.navColored ? '#ced2d5' : '#fff')};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
    margin: 0 auto 2rem;
    max-width: calc(100% - 80px);
    padding: 1rem 0;
    position: relative;

    .overlay {
      position: fixed;
      top: 3.6rem;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      background: rgba(57, 55, 72, 0.22);
      visibility: hidden;

      &.show {
        animation: fade-in 0.2s ease-in-out forwards;
      }
    }

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
            bottom: -18px;
            height: 2px;
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
      .icon {
        cursor: pointer;
        position: relative;

        &:not(:last-child) {
          margin-right: 0.8rem;
        }

        .badge {
          position: absolute;
          top: -10px;
          left: 10px;
          text-align: center;
          width: 20px;
          height: 20px;
          background-color: #333;
          border-radius: 50%;
          color: white;
        }

        .fa-angle-down {
          transition: 0.3s transform;
          transform: ${props => (props.currencyShow ? 'rotate(180deg)' : '')};
        }
      }

      .dropdown-menu {
        position: absolute;
        bottom: 0;
        right: -1rem;
        transform: translateY(100%);
        z-index: 3000;

        &.dropdown-cart {
          display: ${props => (props.cartShow ? 'block' : 'none')};
          background-color: #fff;
          padding: 1rem;
          width: 20rem;
        }

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
  }

  @keyframes fade-in {
    from {
      visibility: hidden;
      opacity: 0;
    }
    1% {
      visibility: visible;
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
  }
`;
