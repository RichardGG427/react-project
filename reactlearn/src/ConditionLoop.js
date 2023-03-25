import React, { Component } from "react";

export default class ConditionLoop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: true,
      goods: [
        { title: "1", price: 11 },
        { title: "2", price: 22 },
        { title: "3", price: 33 },
        { title: "4", price: 44 },
        { title: "5", price: 55 },
      ],
    };
    // setTimeout(() => {
    //   this.setState({
    //     showTitle: false,
    //   });
    // }, 3000);
    // this.showTitleFun = this.showTitleFun.bind(this);
  }
  //1st 3rd way
  showTitleFun() {
    this.setState({
      showTitle: false,
    });
  }
// 2nd way
//   showTitleFun=()=> {
//     this.setState({
//       showTitle: false,
//     });
//   }
  render() {
    let result;
    if (this.state.showTitle) {
      result = <h2>{this.props.title}</h2>;
    } else {
      result = null;
    }
    // let result=this.state.showTitle?<h2>{this.props.title}</h2>:null
    return (
      <div>
        <h1>ConditionLoop demonstration</h1>
        {/* 1st 2nd way */}
        {/* <button onClick={this.showTitleFun}>Don't display title</button> */}
        <button onClick={()=>this.showTitleFun()}>Don't display title</button>
        {/* {this.state.showTitle?<h2>{this.props.title}</h2>:null} */}
        {result}
        <ul>
          {this.state.goods.map((goodd) => {
            return (
              <li key={goodd.title}>
                <span>name:{goodd.title}</span>
                <span>price:{goodd.price}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
