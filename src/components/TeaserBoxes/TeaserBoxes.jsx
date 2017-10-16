import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TeaserBox from '../TeaserBox';
import '../../sass/modules/teaser-boxes.scss';

class TeaserBoxes extends Component {
  render() {
    const { imageList = [], selectImage, selectedImageId } = this.props;
    const teaserBoxes = [];
    for (const image of imageList) {
      const { id, url } = image;
      teaserBoxes.push(<TeaserBox key={id} id={id} imageUrl={url} selectImage={selectImage} />);
    }

    return <div className="teaser-boxes-container">{teaserBoxes}</div>;
  }
}

TeaserBoxes.propTypes = {
  selectImage: PropTypes.func,
  selectedImageId: PropTypes.string,
  imageList: PropTypes.array,
};

export default TeaserBoxes;
