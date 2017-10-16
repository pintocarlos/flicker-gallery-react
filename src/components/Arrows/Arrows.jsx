import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowButton from '../ArrowButton';

class Arrows extends Component {
  render() {
    const { nextImageId, previousImageId, selectImage } = this.props;
    return [
      <ArrowButton key={'left-arrow'} direction="left" selectImage={selectImage} imageId={previousImageId} />,
      <ArrowButton key={'right-arrow'} direction="right" selectImage={selectImage} imageId={nextImageId} />
    ];
  }
}

Arrows.propTypes = {
  nextImageId: PropTypes.string,
  previousImageId: PropTypes.string,
  selectImage: PropTypes.func,
};

export default Arrows;
