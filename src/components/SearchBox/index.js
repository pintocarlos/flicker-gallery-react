import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchKey } from '../../actions';
import { getSearchKey } from '../../selectors';

import SearchBox from './SearchBox';

const mapStateToProps = state => ({
  searchKey: getSearchKey(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setSearchKey,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
