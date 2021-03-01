/* eslint-disable semi */
import uuid from 'react-uuid';

const initialState = {
  notifications: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'APP_NOTIFICATIONS::CREATE':
      return {
        notifications: state.notifications.concat({
          message: action.payload.message,
          status: action.payload.status,
          id: uuid(),
        }),
      };

    case 'APP_NOTIFICATIONS::CLEAR':
      return initialState;

    default:
      return state;
  }
};
