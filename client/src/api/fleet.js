/* eslint-disable semi */
import axios from 'axios';

const getUrl = '/api/fleets/all-fleets';

const get = async () => {
  const response = await axios.get(getUrl);
  return response;
};
export default {
  get,
};
