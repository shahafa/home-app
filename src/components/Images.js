/* eslint-disable react/no-array-index-key */

import React, { Component, PropTypes } from 'react';
import Lightbox from 'react-images';

const styles = {
  imagesContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },

  image: {
    maxWidth: '64px',
    maxHeight: '64px',
    width: 'auto',
    height: 'auto',
    marginLeft: '10px',
    cursor: 'pointer',
  },
};

class Images extends Component {
  static propTypes = {
    images: PropTypes.array,
  }

  state = {
    currentImage: 0,
    lightBoxIsOpen: false,
  }

  onImageClick = (index) => {
    const { images } = this.props;
    const normaliziedIndex = (-1 * index) + (images.length - 1);

    this.setState({
      currentImage: normaliziedIndex,
      lightBoxIsOpen: true,
    });
  }

  onLightBoxClose = () => {
    this.setState({
      currentImage: 0,
      lightBoxIsOpen: false,
    });
  }

  onGotoPreviousImage = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  onGotoNextImage = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  onClickThumbnail = (index) => {
    this.setState({
      currentImage: index,
    });
  }

  render() {
    const { images } = this.props;
    const {
      lightBoxIsOpen,
      currentImage,
    } = this.state;

    return (
      <div>
        {images &&
          <div>
            <div style={styles.imagesContainer}>
              {images.map((image, index) =>
                <img
                  key={index}
                  style={styles.image}
                  src={image}
                  alt=""
                  onTouchTap={() => this.onImageClick(index)}
                />)}
            </div>

            <Lightbox
              currentImage={currentImage}
              images={images.map(image => ({ src: image })).reverse()}
              showThumbnails
              isOpen={lightBoxIsOpen}
              onClickPrev={this.onGotoPreviousImage}
              onClickNext={this.onGotoNextImage}
              onClose={this.onLightBoxClose}
              onClickThumbnail={this.onClickThumbnail}
              showImageCount={false}
            />
          </div>
        }
      </div>
    );
  }
}

export default Images;
