const intialState = {
  count: [],
};

const rootReducer = (state = intialState, action) => {
  // console.log("reduced", action);
  switch (action.type) {
    case "SAVED_DATA":
      const newState = Object.assign({}, state, {
        count: [...state.count, action.payload],
      });
      return newState;
    case "DELETE_DATA":
      const deletedState = Object.assign({}, state, {
        count: [
          ...state.count.filter((val, index) => index !== action.payload),
          action.payload,
        ],
      });
      return deletedState;

    default:
      return state;
  }
};
export default rootReducer;
