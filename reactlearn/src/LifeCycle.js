import React, { Component } from "react";

class LifeCycleSon extends Component {
  constructor(props) {
    super(props);
    console.log("1.constructor");
  }
  componentWillMount() {
    //Component will mount,we can call api,get data, but can not operate DOM
    console.log("2.component will mount");
  }
  componentDidMount() {
    //component has already mount,can operate DOM,can update state
    console.log("4.component has already mounted");
  }
  componentWillReceiveProps() {
    //father componnent props changed
    console.log("5.father component state props changed");
  }
  shouldComponentUpdate() {
    //component need update or not
    console.log("6.component need update or not");
    return true;
  }
  componentWillUpdate() {
    console.log("7.component will update");
  }
  componentDidUpdate() {
    console.log("8.component have updated");
  }
  componentWillUnmount() {
    //component destroy
    console.log("component has been unmounted");
  }
  render() {
    console.log("3.component render");

    return <div>Component LifeCycle</div>;
  }
}

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      son: "I am lifecycle",
      showSon: true,
    };
    setTimeout(() => {
      this.setState({
        son: "update",
      });
    }, 2000);
    setTimeout(() => {
      this.setState({
        showSon: false,
      });
    }, 4000);
  }
  render() {
    return (
      <div>
        {this.state.showSon ? (
          <LifeCycleSon title={this.state.son}></LifeCycleSon>
        ) : (
          <div>component has been unmounted</div>
        )}
      </div>
    );
  }
}
