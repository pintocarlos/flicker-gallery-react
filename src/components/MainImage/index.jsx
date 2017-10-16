import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../sass/modules/main-image.scss';

class MainImage extends Component {
  render() {
    const { imageUrl } = this.props;
    const styles = {
      backgroundImage: `url(${ imageUrl })`,
    };

    return <div className="main-image" style={styles}></div>;
  }
}

MainImage.propTypes = {
  imageUrl: PropTypes.string,
};

export default MainImage;
