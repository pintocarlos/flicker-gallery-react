import { actionCreator } from '../actions/actionHelpers';

export const FETCH_IMAGES_START = 'FETCH_IMAGES_START';
export const FETCH_IMAGES_DONE = 'FETCH_IMAGES_DONE';
export const FETCH_IMAGES_FAILED = 'FETCH_IMAGES_FAILED';
export const fetchImagesStart = () => actionCreator(FETCH_IMAGES_START);
export const fetchImagesDone = images => actionCreator(FETCH_IMAGES_DONE, { images });
export const fetchImagesFailed = error => actionCreator(FETCH_IMAGES_FAILED, { error });


export const SELECT_IMAGE = 'SELECT_IMAGE';
export const selectImage = imageId => actionCreator(SELECT_IMAGE, { imageId });
