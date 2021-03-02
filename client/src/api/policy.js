/* eslint-disable semi */
import axios from 'axios';

const getUrl = '/api/policies';
const postUrl = '/api/policies';

const get = (email) => axios.get(getUrl, { params: { email: email } });
const post = ({ currentPolicy }) => axios.post(postUrl, currentPolicy);

export default {
  get,
  post,
};
