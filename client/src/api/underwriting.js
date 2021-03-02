import axios from 'axios';

const postUrl = 'api/underwriting/rater';

// const post = ({ currentRater }) => axios.post(postUrl, currentRater);
const post = ({ currentRater }) => {
  console.log(currentRater);
  return axios.post(postUrl, currentRater);
};

export default {
  post,
};
