import React, { Component } from 'react';
import StyledSnack from './Snackbar.style';

class SnackBar extends Component {
  render() {
    const { open, children } = this.props;
    return (
      <StyledSnack className={`${open && 'open'}`}>{children}</StyledSnack>
    );
  }
}

export default SnackBar;
