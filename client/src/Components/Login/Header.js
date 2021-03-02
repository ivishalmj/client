/* eslint-disable semi */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

// eslint-disable-next-line react/prop-types
export default () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="logo-wrapper">
    <NavLink
      style={{ color: 'inherit', textDecoration: 'inherit' }}
      className="nav-button"
      to="/signup"
    >
      Create Account
    </NavLink>

    <h1 className="logo">
      <NavLink
        style={{ color: 'inherit', textDecoration: 'inherit' }}
        to="/lookup"
      >
        Stable
      </NavLink>
    </h1>
  </div>
);
