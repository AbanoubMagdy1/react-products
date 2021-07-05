import React, { Component } from 'react';

class TextAttribute extends Component {
  render() {
    const { items, id, setAttribute, choice } = this.props;
    return (
      <div className="choices">
        {items.map(item => (
          <div
            key={item.id}
            className={`box text ${choice === item.value && 'chosen'}`}
            onClick={() => setAttribute(id, item.value)}
          >
            {item.displayValue}
          </div>
        ))}
      </div>
    );
  }
}

export default TextAttribute;
