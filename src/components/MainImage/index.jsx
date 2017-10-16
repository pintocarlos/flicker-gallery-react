import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainImage extends Component {
  render() {
    const { imageUrl } = this.props;
    return (<div>
      <img alt="main gallery" src={imageUrl} />
    </div>);
  }
}

MainImage.propTypes = {
  imageUrl: PropTypes.string,
};

export default MainImage;
