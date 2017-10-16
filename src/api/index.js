import axios from 'axios';
import settings from '../../settings';

export const fetchFlickerImages = (searchKey) => (searchKey)
    ? axios.get(`${settings.FLICKER_SEARCH_IMAGES_URL}${searchKey}`)
    : axios.get(settings.FLICKER_GET_RECENT_IMAGES_URL);
