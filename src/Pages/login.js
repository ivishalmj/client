/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';
import LoginLayout from '../Layouts/login';
import Login from '../api/login';
import './login.scss';

export default () => {
  const dispatch = useDispatch();
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  async function submitLogin() {
    try {
      const response = await Login.post(emailInputValue, passwordInputValue);
      const { token } = response.data;
      dispatch({
        type: 'USER::SET_ADMIN_LOGIN_TOKEN',
        payload: token,
      });
      dispatch({
        type: 'APP_NOTIFICATIONS::CLEAR',
        payload: null,
      });
    } catch (error) {
      dispatch({
        type: 'APP_NOTIFICATIONS::CREATE',
        payload: {
          message: 'Invalid username/password.',
          status: 'error',
        },
      });
    }
  }

  return (
    <LoginLayout>
      <div className="login-wrapper">
        <h3> Administrator Login</h3>
        <div className="well">
          <label htmlFor="email-input">Email address</label>
          <Input
            size="40"
            maxLength="40"
            className="email-input"
            value={emailInputValue}
            type="text"
            placeholder="Enter your email address"
            onChange={(event) => {
              setEmailInputValue(event.target.value);
            }}
          />
          <br />
          <label className="password-label" htmlFor="password-input">
            Password
          </label>
          <Input
            size="40"
            maxLength="40"
            value={passwordInputValue}
            className="password-input"
            type="password"
            placeholder="Enter your password"
            onChange={(event) => {
              setPasswordInputValue(event.target.value);
            }}
          />
        </div>
        <Button className="pointer-events-none" onClick={submitLogin}>
          Log in
        </Button>
      </div>
    </LoginLayout>
  );
};
