import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchImagesStart,
} from './actions';
import {
  getUrlForActiveImage,
} from './selectors';
import MainImage from './components/MainImage';

class App extends Component {
  componentWillMount() {
    this.props.fetchImagesStart();
  }
  
  render() {
    const { imageUrl } = this.props;
    return (<div>
      <MainImage imageUrl={imageUrl} />
    </div>);
  }
}

const mapStateToProps = state => ({
  imageUrl: getUrlForActiveImage(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchImagesStart,
}, dispatch);

App.propTypes = {
  fetchImagesStart: PropTypes.func,
  imageUrl: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
