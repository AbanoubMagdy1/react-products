import React, { Component } from 'react';
import StyledMessage from './Message.style';
import Container from './Container.style';

class Message extends Component {
  render() {
    return (
      <Container>
        <StyledMessage>{this.props.children}</StyledMessage>
      </Container>
    );
  }
}

export default Message;
