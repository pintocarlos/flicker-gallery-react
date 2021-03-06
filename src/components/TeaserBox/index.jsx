import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../sass/modules/teaser-box.scss';

class TeaserBox extends Component {
  render() {
    const { id, imageUrl, selectImage, selectedImageId } = this.props;
    const styles = {
      backgroundImage: `url(${ imageUrl })`,
    };
    const selectedClassName = (selectedImageId === id) ? 'selected' : '';

    return (<div
      id={id}
      className={`teaser-box animated fadeIn ${selectedClassName}`}
      style={styles}
      onClick={() => selectImage(id)}>
    </div>);
  }
}

TeaserBox.propTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  selectImage: PropTypes.func,
  selectedImageId: PropTypes.string,
};

export default TeaserBox;
