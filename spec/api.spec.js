import axios from 'axios';
import { fetchFlickerImages } from '../src/api';
import setting from '../settings';

describe('fetchFlickerImages', () => {
  beforeEach(() => {
    sinon.stub(axios, 'get').resolves([1, 2]);
  });

  afterEach(() => {
    axios.get.restore();
  });

  it('should attempt to retrieve images', () => fetchFlickerImages()
    .then(() => {
      expect(axios.get).to.have.been.calledOnce;
      expect(axios.get).to.have.been.calledWith(setting.FLICKER_IMAGES_URL);
    }));

  it('should retrieve images from axios get', () => fetchFlickerImages()
    .then(images => {
      expect(images).to.deep.equal([1, 2]);
    }));
});
