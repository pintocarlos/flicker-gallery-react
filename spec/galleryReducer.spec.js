import { Map } from 'Immutable';
import galleryReducer from '../src/reducers/galleryReducer';
import {
  fetchImagesStart,
  fetchImagesDone,
  fetchImagesFailed,
  selectImage,
  setSearchKey,
} from '../src/actions';

const imageSampleData = [
  {
    farm: 1,
    id: 'id1',
    isfamily: 0,
    isfriend: 0,
    ispublic: 1,
    owner: '126866824@N03',
    secret: 'secret1',
    server: 'server1',
    title: 'IMG_4058-Edit.jpg',
  },
  {
    farm: 2,
    id: 'id2',
    isfamily: 0,
    isfriend: 0,
    ispublic: 1,
    owner: '126866824@N03',
    secret: 'secret2',
    server: 'server2',
    title: 'IMG_4058-Edit.jpg',
  },
];

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

  describe('fetchImagesStart is dispatched', () => {
    it('should set loading to true', () => {
      const currentState = galleryReducer().set('loading', false);
      const action = fetchImagesStart();

      const nextState = galleryReducer(currentState, action);

      expect(nextState.get('loading')).to.be.true;
    });
  });

  describe('fetchImagesDone is dispatched', () => {
    it('should set loading to true', () => {
      const currentState = galleryReducer();
      const action = fetchImagesDone();

      const nextState = galleryReducer(currentState, action);

      expect(nextState.get('loading')).to.be.false;
    });

    it('should set images', () => {
      const currentState = galleryReducer();
      const action = fetchImagesDone(imageSampleData);

      const nextState = galleryReducer(currentState, action);

      expect(nextState.get('images')).to.deep.equal({
        id1: {
          id: 'id1',
          url: 'http://farm1.static.flickr.com/server1/id1_secret1.jpg',
        },
        id2: {
          id: 'id2',
          url: 'http://farm2.static.flickr.com/server2/id2_secret2.jpg',
        },
      });
    });

    it('should set selectedImageId', () => {
      const currentState = galleryReducer();
      const action = fetchImagesDone(imageSampleData);

      const nextState = galleryReducer(currentState, action);

      expect(nextState.get('selectedImageId')).to.deep.equal('id1');
    });
  });

  describe('fetchImagesFailed is dispatched', () => {
    it('should set loading to true', () => {
      const currentState = galleryReducer();
      const action = fetchImagesFailed();

      const nextState = galleryReducer(currentState, action);

      expect(nextState.get('loading')).to.be.false;
    });
  });

  describe('selectImage is dispatched', () => {
    it('should set loading to true', () => {
      const currentState = galleryReducer();
      const action = selectImage('someImageId');

      const nextState = galleryReducer(currentState, action);

      expect(nextState.get('selectedImageId')).to.equal('someImageId');
    });
  });

  describe('setSearchKey is dispatched', () => {
    it('should set searchKey to passed value', () => {
      const currentState = galleryReducer();
      const action = setSearchKey('something');

      const nextState = galleryReducer(currentState, action);

      expect(nextState.get('searchKey')).to.equal('something');
    });
  });
});
