import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  fetchImagesStart,
} from './actions';
import {
  getUrlForActiveImage,
  getImageList,
} from './selectors';

import MainImage from './components/MainImage';
import TeaserBox from './components/TeaserBox';

class App extends Component {
  componentWillMount() {
    this.props.fetchImagesStart();
  }
  
  renderTeaserBoxes() {
    const { imageList = [] } = this.props;
    const teaserBoxes = [];
    for (const image of imageList) {
      const { id, url } = image;
      teaserBoxes.push(<TeaserBox key={id} id={id} imageUrl={url} />);
    }

    return teaserBoxes;
  }

  render() {
    const { imageUrl } = this.props;
    const teaserBoxes = this.renderTeaserBoxes();

    return (<div className="app-container">
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
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchImagesStart,
}, dispatch);

App.propTypes = {
  fetchImagesStart: PropTypes.func,
  imageList: PropTypes.array,
  imageUrl: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
