/* eslint-disable semi */
import React, { useState } from 'react';
import { Table, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const policies = useSelector((state) => state.policy.policies);
  const [searchInputValue, setSearchInputValue] = useState('');

  function handleSearchInput(event) {
    setSearchInputValue(event.target.value);
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Input
        style={{ width: '20%' }}
        placeholder="Policy Search"
        onChange={handleSearchInput}
      />
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <div>{null}</div>
            </Table.HeaderCell>
            <Table.HeaderCell>Policy Number</Table.HeaderCell>
            <Table.HeaderCell>VIN</Table.HeaderCell>
            <Table.HeaderCell>Driver Name</Table.HeaderCell>
            <Table.HeaderCell>Premium</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {policies
            .filter((policy) => {
              if (searchInputValue === '') return true;
              const regex = new RegExp(
                searchInputValue.replace(/\\/g, ''),
                'i'
              );
              return (
                policy.policyNumber.match(regex) ||
                policy.vin.match(regex) ||
                policy.driverName.match(regex) ||
                policy.premium.toString().match(regex)
              );
            })
            .map((policy, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Table.Row key={index}>
                <Table.Cell>
                  <div>
                    <NavLink
                      to={`/policies/${policy.policyNumber}/edit`}
                      style={{
                        fontWeight: 'bold',
                        color: 'blue',
                      }}
                    >
                      Edit Policy
                    </NavLink>
                    <div />
                    <NavLink
                      to="/index"
                      style={{
                        fontWeight: 'bold',
                        color: 'blue',
                      }}
                      onClick={() =>
                        dispatch({
                          type: 'POLICY::DELETE',
                          payload: policy.policyNumber,
                        })
                      }
                    >
                      Delete Policy
                    </NavLink>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <NavLink
                    to={`/policies/${policy.policyNumber}/view`}
                    style={{
                      fontWeight: 'bold',
                      color: 'blue',
                    }}
                  >
                    {' '}
                    {policy.policyNumber}
                  </NavLink>
                </Table.Cell>
                <Table.Cell>{policy.vin}</Table.Cell>
                <Table.Cell>{policy.driverName}</Table.Cell>
                <Table.Cell>{policy.premium}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </>
  );
};
