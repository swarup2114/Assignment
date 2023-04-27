const intialState = {
  count: [],
};

const rootReducer = (state = intialState, action) => {
  // console.log("reduced", action);
  switch (action.type) {
    case "SAVED DATA":
      const newState = Object.assign({}, state, {
        count: [...state.count, action.payload],
      });
      return newState;
    default:
      return state;
  }
};
export default rootReducer;
