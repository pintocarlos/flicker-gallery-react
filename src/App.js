import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchImagesStart,
} from './actions';

import MainImage from './components/MainImage';
import TeaserBoxes from './components/TeaserBoxes';
import Arrows from './components/Arrows';
import SearchBox from './components/SearchBox';
import './sass/modules/app-container.scss';

class App extends Component {
  componentWillMount() {
    this.props.fetchImagesStart();
  }

  render() {
    return (<div className="app-container">
      <SearchBox />
      <Arrows />
      <MainImage />
      <TeaserBoxes />
    </div>);
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchImagesStart,
}, dispatch);

App.propTypes = {
  fetchImagesStart: PropTypes.func,
};

export default connect(undefined, mapDispatchToProps)(App);
