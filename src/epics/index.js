import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounceTime';
import { fetchFlickerImages } from '../api';
import {
  getSearchKey,
} from '../selectors';

import {
  // ACTION NAMES:
  FETCH_IMAGES_START,
  SET_SEARCH_KEY,
  
  // ACTION CREATORS:
  fetchImagesStart,
  fetchImagesDone,
  fetchImagesFailed,
} from '../actions';

export const fetchImages = (action$, store) =>
  action$
    .filter(action => action.type === FETCH_IMAGES_START)
    .mergeMap(() =>
      Observable.fromPromise(fetchFlickerImages(getSearchKey(store.getState())))
        .map(response => fetchImagesDone(response.data.photos.photo.slice(0, 4)))
        .catch(error => Observable.of(fetchImagesFailed(error)))
    );

export const searchImages = (action$) =>
  action$
    .filter(action => action.type === SET_SEARCH_KEY)
    .debounceTime(350)
    .mapTo(fetchImagesStart());

export default combineEpics(
  fetchImages,
  searchImages,
);
