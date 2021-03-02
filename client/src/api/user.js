/* eslint-disable no-unused-vars */
import axios from 'axios';

const postUrl = 'api/adminauth/signup';

const create = async ({
  emailInputValue,
  passwordInputValue,
  confirmInputValue,
}) =>
  axios.post(postUrl, {
    email: emailInputValue,
    password: passwordInputValue,
    passwordConfirm: confirmInputValue,
  });

export default {
  create,
};
