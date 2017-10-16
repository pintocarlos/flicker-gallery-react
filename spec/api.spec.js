import axios from 'axios';
import { fetchFlickerImages } from '../src/api';
import settings from '../settings';

describe('fetchFlickerImages', () => {
  beforeEach(() => {
    sinon.stub(axios, 'get').resolves([1, 2]);
  });

  afterEach(() => {
    axios.get.restore();
  });

  context('and no searchKey is passed', () => {
    it('should attempt to retrieve images from recent images API', () => fetchFlickerImages()
      .then(() => {
        expect(axios.get).to.have.been.calledOnce;
        expect(axios.get).to.have.been.calledWith(settings.FLICKER_GET_RECENT_IMAGES_URL);
      }));

    it('should retrieve images from axios get', () => fetchFlickerImages()
      .then(images => {
        expect(images).to.deep.equal([1, 2]);
      }));
  });

  context('and searchKey is passed', () => {
    it('should attempt to retrieve images from search images API', () => fetchFlickerImages('hello')
      .then(() => {
        expect(axios.get).to.have.been.calledOnce;
        expect(axios.get).to.have.been.calledWith(`${settings.FLICKER_SEARCH_IMAGES_URL}&=hello`);
      }));

    it('should retrieve images from axios get', () => fetchFlickerImages()
      .then(images => {
        expect(images).to.deep.equal([1, 2]);
      }));
  });
});
