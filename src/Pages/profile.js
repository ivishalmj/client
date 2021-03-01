/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
import React from 'react';
import MainLayout from '../Layouts/main';
import './profile.scss';

export default () => {
  return (
    <MainLayout step={3}>
      <div className="profile-wrapper">
        <h3>Profile</h3>
      </div>
    </MainLayout>
  );
};
