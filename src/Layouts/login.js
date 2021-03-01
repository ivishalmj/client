/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import Header from '../Components/Login/Header';
import './login.scss';

export default ({ children }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="page dashboard">
    <Header />
    <div className="content-outer-wrapper">
      <div className="content-inner-wrapper">
        <div className="content">{children}</div>
      </div>
    </div>
  </div>
);
