//manage reducer and action
const firstReducer = (state = 0, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
};

const add = () => ({ type: "add" });
const minus = () => ({ type: "minus" });
const asyncAdd = () => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: "add" });
  }, 2000);
};

export {firstReducer,add,minus,asyncAdd}