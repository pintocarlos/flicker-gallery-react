import axios from 'axios';
import settings from '../../settings';

export const fetchFlickerImages = () => axios.get(settings.FLICKER_IMAGES_URL);
