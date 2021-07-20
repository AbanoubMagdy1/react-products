import React, { Component, createContext } from 'react';
import { Link } from 'react-router-dom';
import SnackBar from '../components/SnackBar';

const SnackContext = createContext();

class SnackProvider extends Component {
  state = {
    open: false,
    name: '',
  };

  openSnack = name => {
    this.setState({ open: true, name }, () =>
      setTimeout(this.closeSnack, 3000)
    );
  };

  closeSnack = () => {
    this.setState({ open: false });
  };

  render() {
    const { name, open } = this.state;
    return (
      <>
        <SnackBar open={open}>
          {name} is added to the cart. <Link to="/cart">View cart</Link>
        </SnackBar>
        <SnackContext.Provider
          value={{
            openSnack: this.openSnack,
          }}
        >
          {this.props.children}
        </SnackContext.Provider>
      </>
    );
  }
}

export function withSnack(Component) {
  return class withCart extends Component {
    render() {
      return (
        <SnackContext.Consumer>
          {value => <Component {...value} {...this.props} />}
        </SnackContext.Consumer>
      );
    }
  };
}

export default SnackProvider;
