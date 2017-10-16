import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArrowButton extends Component {
  render() {
    const { imageId, direction, selectImage } = this.props;
    const className = (direction === 'right')
      ? 'right-arrow'
      : 'left-arrow';

    return (<div className={className} id={className} onClick={() => selectImage(imageId)}>
      {className}
    </div>);
  }
}

ArrowButton.propTypes = {
  imageId: PropTypes.string,
  direction: PropTypes.string,
  selectImage: PropTypes.func,
};

export default ArrowButton;
