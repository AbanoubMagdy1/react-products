import React, { Component } from 'react';
import StyledMessage from './Message.style';

class Message extends Component {
  render() {
    return <StyledMessage>{this.props.children}</StyledMessage>;
  }
}

export default Message;
