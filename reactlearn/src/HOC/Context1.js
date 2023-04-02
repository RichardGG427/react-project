import React, { Component } from "react";
//without context,every layer transform props

let store = {
  name: "Richard",
  from: "HN",
};

// function Info(props) {
//   return (
//     <div>
//       <p>name:{props.name}</p>
//       <p>come from: {props.from}</p>
//     </div>
//   );
// }

class Info extends Component {
  render() {
    return (
      <div>
        <p>name:{this.props.name}</p>
        <p>come from: {this.props.from}</p>
      </div>
    );
  }
}

function ToolBar(props) {
  return <Info {...props}></Info>;
}

export default class Context1 extends Component {
  render() {
    return (
      <div>
        <ToolBar name={store.name} from={store.from}></ToolBar>
      </div>
    );
  }
}
