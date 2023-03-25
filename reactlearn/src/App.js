import React from "react";
import PropsDemo from "./PropsDemo";
import ConditionLoop from "./ConditionLoop";
import logo192 from "./logo192.png";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg2: "This is msg2 in state",
      msg1: "Hello,This is msg1 in state",
      count: 0,
      inputval: "input init value",
    };
  }
  //   state = {
  //     msg1: "Hello,This is msg1 in state",
  //   };
  componentDidMount() {
    // this.setState({
    //   count: this.state.count + 1,
    // },()=>{
    //     console.log(this.state.count,'2nd');

    // });
    // console.log(this.state.count,'1st');
    // this.setState((prevState,prevProps)=>{
    //     return {
    //         count:prevState.count+1
    //     }
    // })
    this.setState(
      (prevState, prevProps) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log(this.state.count, "2nd");
      }
    );
    console.log(this.state.count, "1st");
  }
  inputvalChange = (e) => {
    this.setState({
      inputval: e.target.value,
    });
  };
  render() {
    const msg = "My name is Richard";
    return (
      <div>
        <p>This is a test</p>
        {msg}
        <h1>{this.state.msg1}</h1>
        <h2>{this.state.msg2}</h2>
        <h2>{this.state.count}</h2>
        <PropsDemo title="Richard learn react"></PropsDemo>
        <ConditionLoop title="condition render"></ConditionLoop>
        <img
          src={logo192}
          style={{ width: "60px", height: "60px" }}
          className="reactLogo"
          alt="a"
        ></img>
        <h1>demonstrate react data bind</h1>
        <input
          type="text"
          value={this.state.inputval}
          onChange={(e) => this.inputvalChange(e)}
        />
        {this.state.inputval}
      </div>
    );
  }
}
