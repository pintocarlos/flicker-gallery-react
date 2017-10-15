import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return <div>
      Setting up for flicker image gallery
    </div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
