import React, { Component } from "react";
// use context

let store = {
  name: "Richard",
  from: "HN",
};

//create context
const XdContext = React.createContext();
// const { Provider, Consumer } = XdContext;

class Info extends Component {
  render() {
    return (
      <XdContext.Consumer>
        {(store) => {
          return (
            <div>
              <p>name:{store.name}</p>
              <p>come from: {store.from}</p>
            </div>
          );
        }}
      </XdContext.Consumer>
    );
  }
}

function ToolBar() {
  return <Info></Info>;
}

export default class Context2 extends Component {
  render() {
    return (
      <div>
        <XdContext.Provider value={store}>

          <ToolBar></ToolBar>

        </XdContext.Provider>
      </div>
    );
  }
}
