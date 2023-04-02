import React, { Component } from "react";
import store from "./store";

export default class FirstRedux extends Component {
  render() {
    return (
      <div>
        <h1>learn redux ,write a accumulator</h1>
        {/* get state data using getState function of store */}
        {store.getState()}
        <div>
          <button onClick={() => store.dispatch({ type: "add" })}>Add 1</button>
          <button onClick={() => store.dispatch({ type: "minus" })}>
            Minus 1
          </button>
        </div>
      </div>
    );
  }
}
