import React, { Component } from 'react';
import LoaderStyled from './Loader.style';

class Loader extends Component {
  render() {
    return (
      <LoaderStyled>
        <div className="inner"></div>
      </LoaderStyled>
    );
  }
}

export default Loader;
