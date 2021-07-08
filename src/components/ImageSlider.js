import React, { PureComponent, createRef } from 'react';
import SliderStyled from './ImageSlider.style';

export class ImageSlider extends PureComponent {
  constructor(props) {
    super(props);
    this.img = createRef();
    this.state = {
      count: 1,
      return: true,
    };
  }

  forward = () => {
    const { length } = this.props.images;
    if (this.state.count === length + 1) return;
    this.setState(prevState => ({ count: prevState.count + 1, return: false }));
  };

  backword = () => {
    if (this.state.count === 0) return;
    this.setState(prevState => ({ count: prevState.count - 1, return: false }));
  };

  handleEndTransition = () => {
    const { length } = this.props.images;
    if (this.state.count === 0) {
      this.setState({ count: length, return: true });
    } else if (this.state.count === length + 1) {
      this.setState({ count: 1, return: true });
    }
  };

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    console.log('rerendered');
    const { images } = this.props;
    return (
      <SliderStyled
        count={this.state.count}
        width={this.img.current?.clientWidth}
      >
        {images.length === 1 ? (
          <img src={images[0]} alt="" />
        ) : (
          <>
            <div
              className={`slider-container ${this.state.return && 'return'}`}
              onTransitionEnd={this.handleEndTransition}
            >
              <img src={images[images.length - 1]} ref={this.img} alt="" />
              {images.map((image, i) => (
                <img src={image} alt="" key={i} />
              ))}
              <img src={images[0]} alt="" />
            </div>
            <i className="fas fa-angle-left" onClick={this.backword}></i>
            <i className="fas fa-angle-right" onClick={this.forward}></i>
          </>
        )}
      </SliderStyled>
    );
  }
}

export default ImageSlider;
