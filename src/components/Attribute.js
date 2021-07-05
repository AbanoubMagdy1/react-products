import React, { Component } from 'react';
import AttributeStyled from './Attribute.style';
import TextAttribute from './TextAttribute';
import SwatchAttribute from './SwatchAttribute';

function attributeFactory(type, id, items, choice, setAttribute) {
  switch (type) {
    case 'text':
      return TextAttribute;
    case 'swatch':
      return SwatchAttribute;
    default:
      return;
  }
}

class Attribute extends Component {
  render() {
    const { attribute, setAttribute, choice } = this.props;
    const Choices = attributeFactory(attribute.type);
    return (
      <AttributeStyled>
        <div className="name">{attribute.name}:</div>
        <Choices
          items={attribute.items}
          id={attribute.id}
          choice={choice}
          setAttribute={setAttribute}
        />
        {!choice && <small>Please choose a {attribute.name}</small>}
      </AttributeStyled>
    );
  }
}

export default Attribute;
