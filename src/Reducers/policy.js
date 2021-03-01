/* eslint-disable quotes */
/* eslint-disable semi */
const emptyPolicy = {
  policyNumber: null,
  licensePlate: null,
  driverName: null,
  effectiveDate: null,
  expirationDate: null,
  year: null,
  make: null,
  seats: null,
  vin: null,
  insuredName: null,
  streetAddress: null,
  city: null,
  state: null,
  zip: null,
  premium: null,
  deposit: null,
  id: null,
  fh1Link: null,
  decLink: null,
  coiLink: null,
};

const initialState = {
  policies: [],
  currentPolicy: emptyPolicy,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POLICY::CREATE':
      return {
        ...state,
        currentPolicy: emptyPolicy,
        policies: [
          ...state.policies,
          {
            ...action.payload,
            policyNumber: Date.now(),
          },
        ],
      };

    case 'POLICY::SET_POLICIES':
      return {
        ...state,
        policies: action.payload,
      };

    case 'POLICY::DELETE':
      return {
        ...state,
        // eslint-disable-next-line eqeqeq
        policies: state.policies.filter(
          (policy) => policy.policyNumber !== action.payload
        ),
      };

    case 'POLICY::UPDATE':
      return {
        ...state,
        policies: state.policies.map((policy) => {
          // eslint-disable-next-line eqeqeq
          if (policy.policyNumber == action.payload.policyNumber) {
            return action.payload;
          }

          return policy;
        }),
      };

    case 'POLICY::UPDATE_CURRENT':
      return {
        ...state,
        currentPolicy: {
          ...state.currentPolicy,
          ...action.payload,
        },
      };

    case 'POLICY::SET_CURRENT':
      return {
        ...state,
        currentPolicy: state.policies.find(
          (policy) => policy.policyNumber === action.payload
        ),
      };

    default:
      return state;
  }
};
