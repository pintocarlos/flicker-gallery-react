import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import 'rxjs/add/operator/toArray';
import { createEpicMiddleware, ActionsObservable } from 'redux-observable';
import { Map } from 'immutable';
import { fetchImages } from '../src/epics';
import {
  FETCH_IMAGES_START,
  FETCH_IMAGES_DONE,
  FETCH_IMAGES_FAILED,
} from '../src/actions';

const epicMiddleware = createEpicMiddleware(fetchImages);
const mockStore = configureMockStore([epicMiddleware]);

describe('epics', () => {
  describe('fetchImages', () => {
    let axiosGetStub;
    let store;
    let action$;
    beforeEach(() => {
      axiosGetStub = sinon.stub(axios, 'get').resolves({ data: { photos: { photo: [1, 2, 3, 4, 5] } } });
      store = mockStore({ gallery: Map({}) });
      action$ = ActionsObservable.of({ type: FETCH_IMAGES_START });
    });
    
    afterEach(() => axios.get.restore());
  
    it('dispatches the correct actions with expected payloads', done => {
      const expectedOutputActions = [{
        type: FETCH_IMAGES_DONE,
        meta: undefined,
        payload: { images: [1, 2, 3, 4] },
      }];
  
      fetchImages(action$, store)
        .toArray()
        .subscribe(actualOutputActions => {
          expect(actualOutputActions).to.deep.equal(expectedOutputActions);
          done();
        }
      );
    });
  
    context('and get request fails', () => {
      beforeEach(() => {
        axiosGetStub.rejects({ foo: 'bar' });
      });
  
      it('dispatches the correct actions with expected payload', done => {
        const expectedOutputActions = [{
          type: FETCH_IMAGES_FAILED,
          meta: undefined,
          payload: { error: { foo: 'bar' } },
        }];
  
        fetchImages(action$, store)
          .toArray()
          .subscribe(actualOutputActions => {
            expect(actualOutputActions).to.deep.equal(expectedOutputActions);
            done();
          }
        );
      });
    });
  });
});
