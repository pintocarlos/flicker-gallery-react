import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TeaserBox extends Component {
  render() {
    const { imageUrl } = this.props;
    return (<div>
      <img alt="teaser box" src={imageUrl} />
    </div>);
  }
}

TeaserBox.propTypes = {
  imageUrl: PropTypes.string,
};

export default TeaserBox;
