import { connect } from 'react-redux';
import { getUrlForActiveImage } from '../../selectors';

import MainImage from './MainImage';

const mapStateToProps = state => ({
  imageUrl: getUrlForActiveImage(state),
});

export default connect(mapStateToProps)(MainImage);
