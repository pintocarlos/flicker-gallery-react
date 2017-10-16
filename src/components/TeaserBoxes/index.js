import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectImage } from '../../actions';
import {
  getSelectedImageId,
  getImageList,
 } from '../../selectors';

import TeaserBoxes from './TeaserBoxes';

const mapStateToProps = state => ({
  selectedImageId: getSelectedImageId(state),
  imageList: getImageList(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  selectImage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeaserBoxes);
