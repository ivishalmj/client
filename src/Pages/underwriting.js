/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Underwriting from '../api/underwriting';
import MainLayout from '../Layouts/main';
import './underwriting.scss';

export default () => {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(null);
  const currentRater = useSelector((state) => state.underwriting.currentRater);
  console.log(currentRater);

  function handleTextInputChange(field, event) {
    dispatch({
      type: 'RATER::UPDATE_CURRENT',
      payload: {
        [field]: event.target.value,
      },
    });
  }

  async function submitForm(event) {
    try {
      console.log(currentRater, event);
      const response = await Underwriting.post({ currentRater, event });
      console.log(response);
      dispatch({
        type: 'RATER::CREATE',
        payload: currentRater,
      });
      event.preventDefault();
      setSubmitted(true);
    } catch (error) {
      alert('Must provide a valid date and/or name and cannot be left blank');
    }
  }

  if (submitted) {
    // eslint-disable-next-line react/jsx-filename-extension
    return <Redirect to="/lookup" />;
  }

  // async function handleImage() {
  //   console.log(File);
  // }

  return (
    <MainLayout step={3}>
      <h1>Underwriting Criteria</h1>
      <div className="form">
        <Form>
          <div className="right-section">
            <label htmlFor="base-price">Base Price</label>
            <Input
              icon="dollar"
              onChange={(event) => handleTextInputChange('basePrice', event)}
              type="text"
              className="base-price"
              value={currentRater?.basePrice}
            />

            <br />
            <label htmlFor="dmv-range">1-3 Years DMV</label>
            <Input
              icon="percent"
              type="text"
              className="dmv-range"
              onChange={(event) => handleTextInputChange('yearsDMV1to3', event)}
              value={currentRater?.yearsDMV1to3}
            />
            <br />
            <label htmlFor="yearsTLC1to3">1-3 Years TLC</label>
            <Input
              icon="percent"
              type="text"
              className="yearsTLC1to3"
              onChange={(event) => handleTextInputChange('yearsTLC1to3', event)}
              value={currentRater?.yearsTLC1to3}
            />
            <br />
            <label htmlFor="yearsDMV3plus">3+ Years DMV</label>
            <Input
              icon="percent"
              type="text"
              className="yearsDMV3plus"
              onChange={(event) =>
                handleTextInputChange('yearsDMV3plus', event)
              }
              value={currentRater?.yearsDMV3plus}
            />
            <br />
            <label htmlFor="yearsTLC3plus">3+ Years TLC</label>
            <Input
              icon="percent"
              type="text"
              className="yearsTLC3plus"
              onChange={(event) =>
                handleTextInputChange('yearsTLC3plus', event)
              }
              value={currentRater?.yearsTLC3plus}
            />
            <br />
            <label htmlFor="ddc">DDC</label>
            <Input
              icon="percent"
              type="text"
              className="ddc  "
              onChange={(event) => handleTextInputChange('hasDDC', event)}
              value={currentRater?.hasDDC}
            />
            <br />
            <label htmlFor="points">1-6 Points</label>
            <Input
              icon="percent"
              onChange={(event) => handleTextInputChange('points1_6', event)}
              type="text"
              className="points"
              value={currentRater?.points1_6}
            />

            <br />
            <label htmlFor="accident-1">Accidents</label>
            <Input
              icon="percent"
              type="text"
              className="accident-1"
              onChange={(event) => handleTextInputChange('accident1', event)}
              value={currentRater?.accident1}
            />
            <br />
            <label htmlFor="accidents-2">Accidents 2</label>
            <Input
              icon="percent"
              type="text"
              className="accidents-2"
              onChange={(event) => handleTextInputChange('accident2', event)}
              value={currentRater?.accident2}
            />
            <br />
            <Button onClick={submitForm} type="submit">
              Submit
            </Button>
          </div>
          <label htmlFor="date">Date</label>
          <Input
            onChange={(event) => handleTextInputChange('date', event)}
            type="text"
            className="date"
            value={currentRater?.date}
          />

          <br />
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            className="name"
            onChange={(event) => handleTextInputChange('name', event)}
            value={currentRater?.name}
          />
          <br />
          <label htmlFor="version">Version</label>
          <Input
            type="text"
            className="version"
            onChange={(event) => handleTextInputChange('version', event)}
            value={currentRater?.version}
          />
          <br />
          <br />
        </Form>
      </div>
    </MainLayout>
  );
};
