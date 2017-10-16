import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../sass/modules/teaser-box.scss';

class TeaserBox extends Component {
  render() {
    const { id, imageUrl, selectImage } = this.props;
    const styles = {
      backgroundImage: `url(${ imageUrl })`,
    };

    return (<div
      id={id}
      className="teaser-box"
      style={styles}
      onClick={() => selectImage(id)}>
    </div>);
  }
}

TeaserBox.propTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  selectImage: PropTypes.func,
};

export default TeaserBox;
