//initial state
const initialState = {
  isLogin: false,
};
//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return { isLogin: true };
    case "login_failed":
      return { isLogin: false };

    default:
      return state;
  }
};
//write redux-saga create action function
const login = function () {
  return { type: "login_request" };
};
export { login };
