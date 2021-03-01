/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import MainLayout from '../Layouts/main';
import './dashboard.scss';

export default () => {
  const [rocinanteClicked, setRocinanteClicked] = useState(false);

  function handleRocinanteClick() {
    setRocinanteClicked(true);
  }

  if (rocinanteClicked) {
    return <Redirect to="lookup" />;
  }

  return (
    <MainLayout step={5}>
      <div className="dash-wrapper">
        <h3>Dashboard</h3>
        <div>
          <Button
            style={{
              padding: 100,
              marginRight: 700,
              fontSize: 20,
            }}
            onClick={() => handleRocinanteClick()}
          >
            Rocinante
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};
