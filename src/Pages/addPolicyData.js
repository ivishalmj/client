/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Policy from '../api/policy';
import Upload from '../Components/Main/Upload';
import MainLayout from '../Layouts/main';
import './addPolicyData.scss';

export default () => {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(null);
  const currentPolicy = useSelector((state) => state.policy.currentPolicy);

  function handleTextInputChange(field, event) {
    dispatch({
      type: 'POLICY::UPDATE_CURRENT',
      payload: {
        [field]: event.target.value,
      },
    });
  }

  async function submitForm(event) {
    const response = await Policy.post({ currentPolicy, event });
    console.log(response);
    dispatch({
      type: 'POLICY::CREATE',
      payload: currentPolicy,
    });
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    // eslint-disable-next-line react/jsx-filename-extension
    return <Redirect to="/index" />;
  }

  // async function handleImage() {
  //   console.log(File);
  // }

  return (
    <MainLayout step={4}>
      <div className="form">
        <div className="right-section">
          <Upload />
          {/* <Button>Upload FH1</Button>
          <br />
          <Button>Upload DEC</Button>
          <br />
          <Button>Upload COI</Button> */}
          <br />
          <label htmlFor="select">Select a deposit amount</label>
          <select name="select">
            <option value="option 1">15%</option>
            <option value="option 2">20%</option>
            <option value="option 3">25%</option>
            <option value="option 4">40%</option>
            <option value="option 5">100%</option>
          </select>
        </div>
        <Form>
          <label htmlFor="policy-number">Policy Number:</label>
          <input
            onChange={(event) => handleTextInputChange('policyNumber', event)}
            type="text"
            id="policy-number"
            value={currentPolicy?.policyNumber}
          />

          <br />
          <label htmlFor="eff-date">Effective Date:</label>
          <input
            type="text"
            id="eff-date"
            name="lname"
            onChange={(event) => handleTextInputChange('effectiveDate', event)}
            value={currentPolicy?.effectiveDate}
          />
          <br />
          <label htmlFor="exp-date">Expiration Date:</label>
          <input
            type="text"
            id="exp-date"
            name="fname"
            onChange={(event) => handleTextInputChange('expirationDate', event)}
            value={currentPolicy?.expirationDate}
          />
          <br />
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            name="lname"
            onChange={(event) => handleTextInputChange('year', event)}
            value={currentPolicy?.year}
          />
          <br />
          <label htmlFor="make">Make:</label>
          <input
            type="text"
            id="make"
            name="fname"
            onChange={(event) => handleTextInputChange('make', event)}
            value={currentPolicy?.make}
          />
          <br />
          <label htmlFor="vin">VIN:</label>
          <input
            onChange={(event) => handleTextInputChange('vin', event)}
            type="text"
            id="vin"
            name="lname"
            value={currentPolicy?.vin}
          />
          <br />
          <label htmlFor="seats">Seats:</label>
          <input
            type="text"
            id="seats"
            name="fname"
            onChange={(event) => handleTextInputChange('seats', event)}
            value={currentPolicy?.seats}
          />
          <br />
          <label htmlFor="insured-name">Insured Name:</label>
          <input
            type="text"
            id="insured-name"
            name="lname"
            onChange={(event) => handleTextInputChange('insuredName', event)}
            value={currentPolicy?.insuredName}
          />
          <br />
          <label htmlFor="street-address">Street Address:</label>
          <input
            type="text"
            id="street-address"
            name="fname"
            onChange={(event) => handleTextInputChange('streetAddress', event)}
            value={currentPolicy?.streetAddress}
          />

          <br />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="lname"
            onChange={(event) => handleTextInputChange('city', event)}
            value={currentPolicy?.city}
          />
          <br />
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="lname"
            onChange={(event) => handleTextInputChange('state', event)}
            value={currentPolicy?.state}
          />
          <br />
          <label htmlFor="zip">Zip:</label>
          <input
            type="text"
            id="zip"
            name="lname"
            onChange={(event) => handleTextInputChange('zip', event)}
            value={currentPolicy?.zip}
          />
          <br />
          <label htmlFor="driver-name">Driver Name:</label>
          <input
            onChange={(event) => handleTextInputChange('driverName', event)}
            type="text"
            id="driver-name"
            name="lname"
            value={currentPolicy?.driverName}
          />
          <br />
          <label htmlFor="premium">Premium:</label>
          <input
            onChange={(event) => handleTextInputChange('premium', event)}
            type="text"
            id="premium"
            name="lname"
            value={currentPolicy?.premium}
          />
          <br />
          <Button onClick={submitForm} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </MainLayout>
  );
};
