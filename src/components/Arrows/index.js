import { connect } from 'react-redux';
import { getNextImageId, getPreviousImageId } from '../../selectors';

import Arrows from './Arrows';

const mapStateToProps = state => ({
  nextImageId: getNextImageId(state),
  previousImageId: getPreviousImageId(state),
});

export default connect(mapStateToProps)(Arrows);
