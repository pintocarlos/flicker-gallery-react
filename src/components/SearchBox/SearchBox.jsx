import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../sass/modules/search-box.scss';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.handleTyping = this.handleTyping.bind(this);
  }
  
  handleTyping(event) {
    this.props.setSearchKey(event.target.value);
  }

  render() {
    const { searchKey } = this.props;

    return (<div className="search-box">
      <input placeholder="Search..." type="text" value={searchKey} onChange={this.handleTyping} />
    </div>);
  }
}

SearchBox.propTypes = {
  searchKey: PropTypes.string,
  setSearchKey: PropTypes.func,
};

export default SearchBox;
