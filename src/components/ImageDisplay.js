import React, { Component } from 'react';
import ImageStyled from './ImageDisplay.style';

class ImageDisplay extends Component {
  state = {
    src1: '',
    src2: '',
    index: 0,
  };

  componentDidMount() {
    this.setState({ src1: this.props.images[0] });
  }

  handleClick = i => {
    if (i === this.state.index) return;
    this.setState({ src2: this.props.images[i], index: i });
  };

  handleTransitionEnd = () => {
    this.setState(prevState => ({
      src1: prevState.src2,
      src2: '',
    }));
  };

  render() {
    const { images } = this.props;
    return (
      <ImageStyled>
        <div className="images-container">
          {images.map((image, i) => (
            <div
              key={i}
              className={`image-container ${
                this.state.index !== i && 'clickable'
              }`}
              onClick={() => {
                this.handleClick(i);
              }}
            >
              <img src={image} alt="" />
            </div>
          ))}
        </div>

        <div className="main-image">
          <div className="main-layer">
            <img src={this.state.src1} alt="" />
          </div>
          <div
            onTransitionEnd={this.handleTransitionEnd}
            className={`main-layer above-image ${
              this.state.src2 && 'above-displayed'
            }`}
          >
            <img src={this.state.src2} alt="" />
          </div>
        </div>
      </ImageStyled>
    );
  }
}

export default ImageDisplay;
