/* eslint-disable semi */
import React from 'react';
import Header from '../Components/Main/Header';
import './main.scss';

// eslint-disable-next-line react/prop-types
export default ({ children, step }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="page dashboard">
    <Header numActive={step} />
    <div className="content-outer-wrapper">
      <div className="content-inner-wrapper">
        <div className="content">{children}</div>
      </div>
    </div>
  </div>
);
