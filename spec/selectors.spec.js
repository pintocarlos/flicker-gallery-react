import configureMockStore from 'redux-mock-store';
import { Map } from 'immutable';
import {
  getImages,
  getImageList,
  getSelectedImageId,
  getUrlForActiveImage,
} from '../src/selectors';

const mockStore = configureMockStore();

describe('selectors', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      gallery: Map({
        loading: false,
        selectedImageId: 'id1',
        images: {
          id1: {
            id: 'id1',
            url: 'http://farm1.static.flickr.com/server1/id1_secret1.jpg',
          },
          id2: {
            id: 'id2',
            url: 'http://farm2.static.flickr.com/server2/id2_secret2.jpg',
          },
        },
        searchKey: null,
      }),
    });
  });

  describe('getSelectedImageId', () => {
    it('should get the id for the selected image from the gallery state', () => {
      expect(getSelectedImageId(store.getState())).to.equal('id1');
    });
  });

  describe('getImages', () => {
    it('should get the images from the gallery state', () => {
      expect(getImages(store.getState())).to.deep.equal({
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
  });

  describe('getImageList', () => {
    it('should get the images in an array from the gallery state', () => {
      expect(getImageList(store.getState())).to.deep.equal([
        {
          id: 'id1',
          url: 'http://farm1.static.flickr.com/server1/id1_secret1.jpg',
        },
        {
          id: 'id2',
          url: 'http://farm2.static.flickr.com/server2/id2_secret2.jpg',
        }]
      );
    });
  });

  describe('getUrlForActiveImage', () => {
    it('should get the url for the selected image id from the gallery state', () => {
      expect(getUrlForActiveImage(store.getState())).to.equal('http://farm1.static.flickr.com/server1/id1_secret1.jpg');
    });
  });
});
