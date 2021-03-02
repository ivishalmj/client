/* eslint-disable semi */
const initialState = {
  adminLoginToken: localStorage.getItem('adminLoginToken'),
  currentUser: null,
  newUser: {
    email: '',
    password: '',
    passwordConfirm: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER::SET_NEW_USER':
      return {
        ...state,
        currentUser: action.payload,
      };

    case 'USER:CREATE':
      return {
        ...state,
        newUser: action.payload,
      };

    case 'USER::SET_EXISTING_USER':
      return {
        ...state,
        currentUser: action.payload,
      };

    case 'USER::SET_ADMIN_LOGIN_TOKEN':
      localStorage.setItem('adminLoginToken', action.payload);
      return {
        ...state,
        adminLoginToken: action.payload,
      };

    case 'USER::LOGOUT':
      localStorage.clear();
      return {
        ...state,
        adminLoginToken: null,
      };

    case 'USER::SET_ADMIN_SIGNUP_TOKEN':
      localStorage.setItem('adminSignupToken', action.payload);
      return {
        ...state,
        adminSignupToken: action.payload,
      };

    default:
      return state;
  }
};
