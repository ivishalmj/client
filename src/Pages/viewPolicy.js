/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Input, Form } from 'semantic-ui-react';
import MainLayout from '../Layouts/main';
import './addPolicyData.scss';

export default withRouter((props) => {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const currentPolicy = useSelector((state) => state.policy.currentPolicy);

  useEffect(() => {
    dispatch({
      type: 'POLICY::SET_CURRENT',
      payload: id,
    });
  }, [dispatch, id]);

  return (
    <MainLayout step={3}>
      <div className="form">
        <div className="right-section">
          <Button>Upload FH1</Button>
          <br />
          <Button>Upload DEC</Button>
          <br />
          <Button>Upload COI</Button>
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
          <h4 htmlFor="policy-number">
            Policy Number:
            {currentPolicy?.policyNumber}
          </h4>
          <label htmlFor="eff-date">Effective Date:</label>
          <Input
            type="text"
            id="eff-date"
            name="lname"
            value={currentPolicy?.effectiveDate}
            disabled="true"
          />
          <br />
          <label htmlFor="exp-date">Expiration Date:</label>
          <Input
            type="text"
            id="exp-date"
            name="fname"
            value={currentPolicy?.expirationDate}
            disabled="true"
          />
          <br />
          <label htmlFor="year">Year:</label>
          <Input
            type="text"
            id="year"
            name="lname"
            value={currentPolicy?.year}
            disabled="true"
          />
          <br />
          <label htmlFor="make">Make:</label>
          <Input
            type="text"
            id="make"
            name="fname"
            value={currentPolicy?.make}
            disabled="true"
          />
          <br />
          <label htmlFor="vin">VIN:</label>
          <Input
            type="text"
            id="vin"
            name="lname"
            value={currentPolicy?.vin}
            disabled="true"
          />

          <br />
          <label htmlFor="seats">Seats:</label>
          <Input
            type="text"
            id="seats"
            name="fname"
            value={currentPolicy?.seats}
            disabled="true"
          />

          <br />
          <label htmlFor="insured-name">Insured Name:</label>
          <Input
            type="text"
            id="insured-name"
            name="lname"
            value={currentPolicy?.insuredName}
            disabled="true"
          />

          <br />
          <label htmlFor="street-address">Street Address:</label>
          <Input
            type="text"
            id="street-address"
            name="fname"
            value={currentPolicy?.streetAddress}
            disabled="true"
          />

          <br />
          <label htmlFor="city">City:</label>
          <Input
            type="text"
            id="city"
            name="lname"
            value={currentPolicy?.city}
            disabled="true"
          />

          <br />
          <label htmlFor="state">State:</label>
          <Input
            type="text"
            id="state"
            name="lname"
            value={currentPolicy?.state}
            disabled="true"
          />

          <br />
          <label htmlFor="zip">Zip:</label>
          <Input
            type="text"
            id="zip"
            name="lname"
            value={currentPolicy?.zip}
            disabled="true"
          />
          <br />
          <label htmlFor="driver-name">Driver Name:</label>
          <Input
            type="text"
            id="driver-name"
            name="lname"
            value={currentPolicy?.driverName}
            disabled="true"
            // eslint-disable-next-line react/jsx-no-comment-textnodes
          />
          <br />
          <label htmlFor="premium">Premium:</label>
          <Input
            type="text"
            id="premium"
            name="lname"
            value={currentPolicy?.premium}
            disabled="true"
          />
          <br />
        </Form>
      </div>
    </MainLayout>
  );
});
