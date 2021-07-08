import React, { Component } from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSwatch = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${props => props.bg};
`;

export class Box extends Component {
  render() {
    const { type, choice } = this.props.attr;
    return (
      <span style={{ display: 'inline-block', marginRight: '0.5rem' }}>
        {type === 'text' && <StyledText>{choice}</StyledText>}
        {type === 'swatch' && <StyledSwatch bg={choice}></StyledSwatch>}
      </span>
    );
  }
}

export default Box;
