import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import { fetchFlickerImages } from '../api';

import {
  // ACTION NAMES:
  FETCH_IMAGES_START,

  // ACTION CREATORS:
  fetchImagesDone,
  fetchImagesFailed,
} from '../actions';

export const fetchImages = (action$) =>
  action$
    .filter(action => action.type === FETCH_IMAGES_START)
    .mergeMap(() =>
      Observable.fromPromise(fetchFlickerImages())
        .map(response => fetchImagesDone(response.data.images))
        .catch(error => Observable.of(fetchImagesFailed(error)))
    );

export default combineEpics(
  fetchImages,
);
