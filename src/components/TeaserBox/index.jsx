import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TeaserBox extends Component {
  render() {
    const { id, imageUrl, selectImage } = this.props;
    return (<div id={id} onClick={() => selectImage(id)}>
      <img alt="teaser box" src={imageUrl} />
    </div>);
  }
}

TeaserBox.propTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  selectImage: PropTypes.func,
};

export default TeaserBox;
