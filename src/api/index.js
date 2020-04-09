// https://photos.hgtv.com/content/hgtv-photos/inspiration-feed.json/dimensions:map.html.json
// https://photos.hgtv.com/content/hgtv-photos/inspiration-feed.json/offset:0,numOfResults:36.html.json
// https://photos.hgtv.com/content/hgtv-photos/inspiration-feed.json/dimensions:103,offset:0,numOfResults:36.html.json
// https://photos.hgtv.com/content/hgtv-photos/inspiration-feed.json/dimensions:96~103,offset:0,numOfResults:36.html.json

import axios from './config.js';

function getFacets() {
  return axios.get('/dimensions:map.html.json').then(data => data.facets);
}

function getFeed(offset = 0, limit = 36) {
  return axios.get(`/offset:${offset},numOfResults:${limit}.html.json`);
}

function getDimansions(facets = '', offset = 0, limit = 36) {
  return axios.get(`/dimensions:${facets},offset:${offset},numOfResults:${limit}.html.json`);
}

export default {
  getFacets,
  getFeed,
  getDimansions,
};
