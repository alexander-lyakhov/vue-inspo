import axios from 'axios';
import { flags } from '@/defs/flags';

// https://photos.hgtv.com/content/hgtv-photos/inspiration-feed.json/dimensions:map.html.json
// https://photos.hgtv.com/content/hgtv-photos/inspiration-feed.json/offset:0,numOfResults:36.html.json
// https://photos.hgtv.com/content/hgtv-photos/inspiration-feed.json/dimensions:103,offset:0,numOfResults:36.html.json

axios.defaults.baseURL = 'https://photos.hgtv.com/content/hgtv-photos/inspiration-feed.json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(
  config => {
    flags.isLoading = true;
    return config;
  },

  err => {
    flags.isLoading = false;
    return Promise.reject(err);
  },
);

axios.interceptors.response.use(
  res => {
    flags.isLoading = false;
    return res.data;
  },

  err => {
    flags.isLoading = false;
    return Promise.reject(err);
  },
);

export default axios;
