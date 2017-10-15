import { Map } from 'Immutable';
import galleryReducer from '../src/reducers/galleryReducer';

describe('galleryReducer', () => {
  const defaultState = Map({
    loading: true,
    selectedImageId: null,
    images: {},
    searchKey: null,
  });
  
  it('should return current state when action is not handled', () => {
    const currentState = galleryReducer();

    expect(currentState.toJS()).to.deep.equal(defaultState.toJS());
  });
});
