import { Map } from 'immutable';
import { actionCreator } from '../actions/actionHelpers';

const gallery = Map({
  loading: true,
  selectedImageId: null,
  images: {},
  searchKey: null,
});

export default (state = gallery, action = actionCreator()) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
