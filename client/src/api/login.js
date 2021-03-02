/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable semi */
import axios from 'axios';

const url = 'api/adminauth/login';

const post = (emailInputValue, passwordInputValue) =>
  axios.post(url, { email: emailInputValue, password: passwordInputValue });

export default {
  post,
};
