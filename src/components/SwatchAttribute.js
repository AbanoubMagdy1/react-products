import React, { Component } from 'react';

class SwatchAttribute extends Component {
  render() {
    const { items, id, setAttribute, choice } = this.props;
    return (
      <div className="choices">
        {items.map(item => (
          <div
            style={{ backgroundColor: item.displayValue }}
            key={item.id}
            className={`box swatch ${choice === item.value && 'chosen'}`}
            onClick={() => setAttribute(id, item.value)}
          ></div>
        ))}
      </div>
    );
  }
}

export default SwatchAttribute;
