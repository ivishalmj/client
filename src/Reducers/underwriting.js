/* eslint-disable quotes */
/* eslint-disable semi */
const emptyRater = {
  date: null,
  name: null,
  version: null,
  basePrice: null,
  dmvRange: null,
  tlcRange: null,
  dmvExcess: null,
  tlcExcess: null,
  doc: null,
  points: null,
  accidents1: null,
  accidents2: null,
};

const initialState = {
  raters: [],
  currentRater: emptyRater,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RATER::CREATE':
      return {
        ...state,
        currentRater: emptyRater,
        rater: [...state.raters],
      };

    case 'RATER::UPDATE_CURRENT':
      return {
        ...state,
        currentRater: {
          ...state.currentRater,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
