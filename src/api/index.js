import axios from './config.js';

function getFacets() {
  return axios.get('/dimensions:map.html.json');
}

function getImages(offset = 0, limit = 36) {
  return axios.get(`/offset:${offset},numOfResults:${limit}.html.json`);
}

export default {
  getFacets,
  getImages,
};
