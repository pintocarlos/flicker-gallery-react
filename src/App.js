import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchImagesStart,
} from './actions';

class App extends React.Component {
  componentWillMount() {
    this.props.fetchImagesStart();
  }
  
  render() {
    return (<div>
      Setting up for flicker image gallery
    </div>);
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchImagesStart,
}, dispatch);

App.propTypes = {
  fetchImagesStart: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
