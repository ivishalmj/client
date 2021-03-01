/* eslint-disable semi */
import React, { useState, useEffect } from 'react';
import { NavLink, Redirect, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MainLayout from '../Layouts/main';
import Table from '../Components/Main/Table';
import Policy from '../api/policy';
import Fleet from '../api/fleet';

export default withRouter((props) => {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [editRedirect, setEditRedirect] = useState(false);

  useEffect(() => {
    async function fetchPolicies() {
      const fleetsResponse = await Fleet.get();
      const fleets = fleetsResponse.data.data.fleet;
      const fleet = fleets.find((_fleet) => _fleet._id === id);
      const { email } = fleet;
      const policyResponse = await Policy.get(email);
      dispatch({
        type: 'POLICY::SET_POLICIES',
        payload: policyResponse.data.data?.policies,
      });
    }

    fetchPolicies();
  }, [dispatch]);

  if (editRedirect) {
    return <Redirect to="/add-details" />;
  }

  return (
    <MainLayout step={3}>
      <h3 style={{ border: '1px solid black' }}>Current Policies</h3>
      <NavLink
        to="/add-details"
        style={{
          fontWeight: 'bold',
          color: 'blue',
        }}
      >
        Add New Policy
      </NavLink>
      <br />
      <Table />
    </MainLayout>
  );
});
