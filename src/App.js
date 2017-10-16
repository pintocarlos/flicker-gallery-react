import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  fetchImagesStart,
  selectImage,
} from './actions';
import {
  getUrlForActiveImage,
  getImageList,
  getNextImageId,
  getPreviousImageId,
} from './selectors';

import MainImage from './components/MainImage';
import TeaserBox from './components/TeaserBox';
import ArrowButton from './components/ArrowButton';
import SearchBox from './components/SearchBox';
import './sass/modules/app-container.scss';

class App extends Component {
  componentWillMount() {
    this.props.fetchImagesStart();
  }
  
  renderTeaserBoxes() {
    const { imageList = [], selectImage } = this.props;
    const teaserBoxes = [];
    for (const image of imageList) {
      const { id, url } = image;
      teaserBoxes.push(<TeaserBox key={id} id={id} imageUrl={url} selectImage={selectImage} />);
    }

    return teaserBoxes;
  }

  render() {
    const { imageUrl, nextImageId, previousImageId, selectImage } = this.props;
    const teaserBoxes = this.renderTeaserBoxes();

    return (<div className="app-container">
      <SearchBox />
      <ArrowButton direction="left" imageId={previousImageId} selectImage={selectImage} />
      <ArrowButton direction="right" imageId={nextImageId} selectImage={selectImage} />
      <MainImage imageUrl={imageUrl} />
      <div className="teaser-boxes-container">
        {teaserBoxes}
      </div>
    </div>);
  }
}

const mapStateToProps = state => ({
  imageUrl: getUrlForActiveImage(state),
  imageList: getImageList(state),
  nextImageId: getNextImageId(state),
  previousImageId: getPreviousImageId(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchImagesStart,
  selectImage,
}, dispatch);

App.propTypes = {
  fetchImagesStart: PropTypes.func,
  imageList: PropTypes.array,
  imageUrl: PropTypes.string,
  nextImageId: PropTypes.string,
  previousImageId: PropTypes.string,
  selectImage: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
