import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectImage } from '../../actions';
import { getNextImageId, getPreviousImageId } from '../../selectors';

import Arrows from './Arrows';

const mapStateToProps = state => ({
  nextImageId: getNextImageId(state),
  previousImageId: getPreviousImageId(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  selectImage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Arrows);
