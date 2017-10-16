import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../sass/modules/arrow-button.scss';

class ArrowButton extends Component {
  render() {
    const { imageId, direction, selectImage } = this.props;
    const className = (direction === 'right')
      ? 'right-arrow'
      : 'left-arrow';

    return (<div className={`arrow-button ${className}`} id={className} onClick={() => selectImage(imageId)}>
      <div></div>
    </div>);
  }
}

ArrowButton.propTypes = {
  imageId: PropTypes.string,
  direction: PropTypes.string,
  selectImage: PropTypes.func,
};

export default ArrowButton;
