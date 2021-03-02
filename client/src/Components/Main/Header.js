/* eslint-disable semi */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Header.scss';

// eslint-disable-next-line react/prop-types
export default ({ numActive }) => {
  const dispatch = useDispatch();

  function logOut() {
    dispatch({
      type: 'USER::LOGOUT',
      payload: null,
    });
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="logo-wrapper">
      {numActive === 1 ? (
        <>
          <NavLink className="home" to="/logout" onClick={logOut}>
            Logout
          </NavLink>
          <NavLink className="home" to="/profile">
            Profile
          </NavLink>
          <NavLink className="home" to="/dashboard">
            Dashboard
          </NavLink>
        </>
      ) : null}
      {numActive === 2 ? (
        <>
          <NavLink className="home" to="/profile">
            Profile
          </NavLink>
          <NavLink className="home" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="home" to="/logout" onClick={logOut}>
            Logout
          </NavLink>
        </>
      ) : null}
      {numActive === 3 ? (
        <>
          <NavLink className="home" to="/logout" onClick={logOut}>
            Logout
          </NavLink>
          <NavLink className="home" to="/dashboard">
            Dashboard
          </NavLink>
        </>
      ) : null}
      {numActive === 4 ? (
        <>
          <NavLink className="home" to="/lookup">
            Add Fleet/Lookup
          </NavLink>
          <NavLink className="home" to="/fleets">
            View Policies
          </NavLink>
          <NavLink className="home" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="home" to="/logout" onClick={logOut}>
            Logout
          </NavLink>
        </>
      ) : null}
      {numActive === 5 ? (
        <>
          <NavLink className="home" to="/logout" onClick={logOut}>
            Logout
          </NavLink>
          <NavLink className="home" to="/profile">
            Profile
          </NavLink>
        </>
      ) : null}

      <h1 className="logo">
        <NavLink
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          to="/lookup"
        >
          Stable
        </NavLink>
      </h1>
    </div>
  );
};
