/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import User from '../api/user';
import SignupLayout from '../Layouts/signup';
import './signup.scss';

export default () => {
  const dispatch = useDispatch();
  const [emailInputValue, setEmailInputValue] = useState(null);
  const [passwordInputValue, setPasswordInputValue] = useState(null);
  const [confirmInputValue, setConfirmInputValue] = useState(null);
  const [signupToken, setSignupToken] = useState(false);
  const [validPassword, setValidPassword] = useState(null);
  const [validEmail, setValidEmail] = useState(null);
  const adminSignupToken = useSelector((state) => state.user.adminSignupToken);

  async function submitSignup() {
    try {
      const response = await User.create({
        emailInputValue,
        passwordInputValue,
        confirmInputValue,
      });
      const { token } = response.data;
      dispatch({
        type: 'USER::SET_ADMIN_SIGNUP_TOKEN',
        payload: token,
      });
      dispatch({
        type: 'APP_NOTIFICATIONS::CREATE',
        payload: {
          message: 'Account creation successful, please login',
          status: 'success',
        },
      });
      setSignupToken(true);
      // if (passwordInputValue !== confirmInputValue) {
      //   alert('Passwords do not match');
      // } else {
      //   alert('account creation successful');
      // }
    } catch (error) {
      dispatch({
        type: 'APP_NOTIFICATIONS::CREATE',
        payload: {
          message: error.response.data.error,
          status: 'error',
        },
      });
    }
  }

  if (signupToken) {
    return <Redirect to="/" />;
  }

  function validatePassword(event) {
    setValidPassword(event.target.value.length >= 7);
  }
  return (
    <SignupLayout>
      <div className="login-wrapper">
        <h3> Register New Account</h3>
        <div className="well">
          <label htmlFor="email-input">Email address</label>
          <Input
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
            value={passwordInputValue}
            className="password-input"
            type="password"
            onKeyDown={validatePassword}
            placeholder="Enter your password"
            onChange={(event) => {
              setPasswordInputValue(event.target.value);
            }}
          />
          <br />
          <label
            className="confirm-password-label"
            htmlFor="confirm-password-input"
          >
            Confirm Password
          </label>
          <Input
            value={confirmInputValue}
            className="confirm-password-input"
            type="password"
            placeholder="Confirm Password"
            onChange={(event) => {
              setConfirmInputValue(event.target.value);
            }}
          />
        </div>
        <Button type="submit" className="submit-button" onClick={submitSignup}>
          Submit
        </Button>
      </div>
    </SignupLayout>
  );
};
