import { createSelector } from 'reselect';

export const getSelectedImageId = state => state.gallery.get('selectedImageId');
export const getImages = state => state.gallery.get('images') || {};
export const getSearchKey = state => state.gallery.get('searchKey');

export const getImageList = createSelector(
  getImages,
  (images) => Object.keys(images).map((id) => images[id]));

export const getUrlForActiveImage = createSelector(
  getSelectedImageId,
  getImages,
  (selectedImageId, images) => (images && images[selectedImageId])
    ? images[selectedImageId].url
    : null);

export const getPreviousImageId = createSelector(
  getSelectedImageId,
  getImageList,
  (selectedImageId, imageList) => {
    const imageIds = imageList.map((image) => image.id);
    const selectedImageIndex = imageIds.indexOf(selectedImageId);
    const previousImageIndex = selectedImageIndex - 1;

    return (selectedImageIndex === 0)
    ? imageIds[imageIds.length - 1]
    : imageIds[previousImageIndex];
  }
);

export const getNextImageId = createSelector(
  getSelectedImageId,
  getImageList,
  (selectedImageId, imageList) => {
    const imageIds = imageList.map((image) => image.id);
    const selectedImageIndex = imageIds.indexOf(selectedImageId);
    const nextImageIndex = selectedImageIndex + 1;

    return (selectedImageIndex === imageIds.length - 1)
    ? imageIds[0]
    : imageIds[nextImageIndex];
  }
);
