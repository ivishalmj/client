const initialState = {
  fleets: [],
  currentFleet: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FLEET::SET_FLEETS':
      return {
        ...state,
        fleets: action.payload,
      };

    default:
      return state;
  }
};
