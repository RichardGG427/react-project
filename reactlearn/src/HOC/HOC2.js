import React, { Component } from "react";

//write 1st HOC, give it a component,return a new component (return function component)
const withLearnReact = (Comp) => {
  const NewComponent = (props) => {
    return <Comp {...props} name="Welcome to learn react"></Comp>;
  };
  return NewComponent;
};

//write 2nd HOC, rewrite lifecycle, rewriting lifecycle component need class component (return class component)
const withLifeCycle = (Comp) => {
  class NewComponent extends Component {
    //rewrite component lifecycle
    componentDidMount() {
      console.log("rewrite componentDidMount lifecycle");
    }
    render() {
      return <Comp {...this.props}></Comp>;
    }
  }
  return NewComponent;
};

// @withLearnReact
// @withLifeCycle

class HOC extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to try HOC</h1>
        {this.props.title}
        <p>name: {this.props.name}</p>
      </div>
    );
  }
}

// export default HOC;
export default withLifeCycle(withLearnReact(HOC));
