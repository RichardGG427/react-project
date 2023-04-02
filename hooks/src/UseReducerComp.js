import React, { useReducer } from "react";
const initState = { count: 0 };

const reducer = (state, action) => {
  //update state according to action of dispatch
  switch (action.type) {
    case "reset":
      return initState;
    case "add":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function UseReducerComp() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <p>Count:{state.count}</p>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        <button onClick={() => dispatch({ type: "add" })}>add 1</button>
        <button onClick={() => dispatch({ type: "minus" })}>minus 1</button>
      </div>
    </div>
  );
}
