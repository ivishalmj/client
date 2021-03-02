/* eslint-disable semi */
import { combineReducers } from 'redux';
import user from './user';
import policy from './policy';
import fleet from './fleet';
import underwriting from './underwriting';
import appNotifications from './appNotifications';

export default combineReducers({
  user,
  policy,
  appNotifications,
  fleet,
  underwriting,
});
