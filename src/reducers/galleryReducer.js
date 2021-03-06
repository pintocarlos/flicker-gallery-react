import { Map } from 'immutable';
import { actionCreator } from '../actions/actionHelpers';
import {
  FETCH_IMAGES_START,
  FETCH_IMAGES_DONE,
  FETCH_IMAGES_FAILED,
  SELECT_IMAGE,
  SET_SEARCH_KEY,
} from '../actions';

const gallery = Map({
  loading: true,
  selectedImageId: null,
  images: {},
  searchKey: '',
});

const composeImageUrl = image =>
  `http://farm${image.farm}.static.flickr.com/${image.server}/${image.id}_${image.secret}.jpg`;

const processImageData = (imageData) => {
  const images = {};
  
  if (imageData && Array.isArray(imageData)) {
    for (const image of imageData) {
      images[image.id] = {
        id: image.id,
        url: composeImageUrl(image),
      };
    }
  }

  return images;
};

export default (state = gallery, action = actionCreator()) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_IMAGES_START:
      return state.set('loading', true);
    
    case FETCH_IMAGES_DONE:
      const images = processImageData(payload.images);
      return state
        .set('selectedImageId', Object.keys(images)[0])
        .set('images', images)
        .set('loading', false);

    case FETCH_IMAGES_FAILED:
      return state.set('loading', false);

    case SELECT_IMAGE:
      return state.set('selectedImageId', payload.imageId);
    
    case SET_SEARCH_KEY:
      return state.set('searchKey', payload.searchKey);
      
    default:
      return state;
  }
};
