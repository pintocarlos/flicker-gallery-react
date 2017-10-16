import {
  // action creators
  fetchImagesStart,
  fetchImagesDone,
  fetchImagesFailed,
  selectImage,
  setSearchKey,

  // action names
  FETCH_IMAGES_START,
  FETCH_IMAGES_DONE,
  FETCH_IMAGES_FAILED,
  SELECT_IMAGE,
  SET_SEARCH_KEY,

} from '../src/actions';

describe('actions', () => {
  describe('fetchImagesStart', () => {
    it('should have correct action type', () => {
      const action = fetchImagesStart();

      expect(action.type).to.equal(FETCH_IMAGES_START);
    });
  });

  describe('fetchImagesDone', () => {
    it('should have correct action type', () => {
      const action = fetchImagesDone();

      expect(action.type).to.equal(FETCH_IMAGES_DONE);
    });

    it('should pass images to payload', () => {
      const action = fetchImagesDone([1, 2]);

      expect(action.payload.images).to.exist;
      expect(action.payload.images).to.deep.equal([1, 2]);
    });
  });

  describe('fetchImagesFailed', () => {
    it('should have correct action type', () => {
      const action = fetchImagesFailed();

      expect(action.type).to.equal(FETCH_IMAGES_FAILED);
    });

    it('should pass images to payload', () => {
      const action = fetchImagesFailed(Error('oh no!'));

      expect(action.payload.error).to.exist;
      expect(action.payload.error.message).to.deep.equal('oh no!');
    });
  });

  describe('selectImage', () => {
    it('should have correct action type', () => {
      const action = selectImage();

      expect(action.type).to.equal(SELECT_IMAGE);
    });

    it('should pass imageId to payload', () => {
      const action = selectImage(123);

      expect(action.payload.imageId).to.exist;
      expect(action.payload.imageId).to.deep.equal(123);
    });
  });

  describe('setSearchKey', () => {
    it('should have correct action type', () => {
      const action = setSearchKey();

      expect(action.type).to.equal(SET_SEARCH_KEY);
    });

    it('should pass searchKey to payload', () => {
      const action = setSearchKey('hello');

      expect(action.payload.searchKey).to.exist;
      expect(action.payload.searchKey).to.equal('hello');
    });
  });
});
