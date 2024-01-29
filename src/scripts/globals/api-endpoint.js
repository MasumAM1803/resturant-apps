/* eslint-disable max-len */
import CONFIG from './config';

const API_ENDPOINT = {
//   NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
//   DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
  HOME: `${CONFIG.BASE_URL}`,
  DETAIL: `${CONFIG.BASE_URL}`,
};

export default API_ENDPOINT;
