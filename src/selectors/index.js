import { createSelector } from 'reselect';

export const getSelectedImageId = state => state.gallery.get('selectedImageId');
export const getImages = state => state.gallery.get('images') || {};

export const getImageList = createSelector(
  getImages,
  (images) => Object.keys(images).map((id) => images[id]));

export const getUrlForActiveImage = createSelector(
  getSelectedImageId,
  getImages,
  (selectedImageId, images) => (images && images[selectedImageId])
    ? images[selectedImageId].url
    : null);
