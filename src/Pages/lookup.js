/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-named-as-default-member */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Button, Input, Message, Dropdown, Label } from 'semantic-ui-react';
import MainLayout from '../Layouts/main';
import Fleet from '../api/fleet';
import './lookup.scss';

// eslint-disable-next-line no-unused-vars
export default withRouter(({ history }) => {
  const dispatch = useDispatch();
  const [newFleetInputValue, setNewFleetInputValue] = useState(null);
  const [fleetSelected, setFleetSelected] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [userNotFound, setUserNotFound] = useState(null);
  const [image, setImage] = useState(null);
  const [underwritingForm, setUnderwitingForm] = useState(false);
  const fleets = useSelector((state) => state.fleet.fleets);
  console.log(underwritingForm);

  function handleAddUserInput(event) {
    setNewFleetInputValue(event.target.value);
  }

  useEffect(() => {
    async function fetchFleets() {
      const fleetsResponse = await Fleet.get();
      dispatch({
        type: 'FLEET::SET_FLEETS',
        payload: fleetsResponse.data.data.fleet,
      });
    }

    fetchFleets();
  }, [dispatch]);

  // async function submitNewUser() {
  //   // eslint-disable-next-line no-unused-vars
  //   const response = await Fleet.create(newFleetInputValue);
  //   dispatch({
  //     type: 'FLEET::CREATE',
  //     payload: newFleetInputValue,
  //   });
  //   setNewUser(true);
  // }

  if (underwritingForm) {
    return <Redirect to="/underwriting" />;
  }

  return (
    <MainLayout step={1}>
      <div className="lookup-wrapper">
        <div className="policy-management">
          <h1>Policy Management</h1>
          <label
            style={{ padding: '15px', marginBottom: '20px' }}
            htmlFor="new-user"
          >
            Add Fleet Customer
          </label>
          <Input
            className="new-user"
            placeholder="Enter Fleet Name"
            onChange={handleAddUserInput}
          />
          <Button onClick={null}>Next</Button>
          <br />
          <label style={{ marginRight: '20px' }} htmlFor="dropdown">
            Select Fleet
          </label>
          <Dropdown
            className="dropdown"
            options={fleets.map((fleet) => ({
              key: fleet._id,
              value: fleet._id,
              text: fleet.fleetName,
            }))}
            onChange={(e, { value }) => {
              history.push(`/fleets/${value}`);
            }}
          />
          {userNotFound && (
            <Message
              error
              header="User not found. Please check your ID and try again."
            />
          )}
        </div>
        <div className="underwriting-management">
          <h1>Underwriting Management</h1>
          <h3>Current Version:</h3>
          <Button>Edit</Button>
          <Button onClick={() => setUnderwitingForm(true)}>New</Button>
        </div>
      </div>
    </MainLayout>
  );
});
