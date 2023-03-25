import React, { Component, PureComponent } from "react";

// class Title extends Component {
//   shouldComponentUpdate(nextProps) {
//     return nextProps.title !== this.props.title;
//   }
//   render() {
//     console.log("I am title componennt");

//     return <div>Title:{this.props.title}</div>;
//   }
// }
//use purecomponent instead
// class Title extends PureComponent {
//     // shouldComponentUpdate(nextProps) {
//     //   return nextProps.title !== this.props.title;
//     // }
//     render() {
//       console.log("I am title componennt");

//       return <div>Title:{this.props.title}</div>;
//     }
//   }

//use React.memo instead of title component above, let function component like purecomponent
const Title = React.memo((props) => {
  console.log("I am Title component");

  return <div>Title: {props.title}</div>;
});

class Count extends Component {
  render() {
    console.log("I am count component");

    return <div>Count:{this.props.count}</div>;
  }
}

export default class Purememo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "This is a Title",
      count: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <Title title={this.state.title}></Title>
        <Count count={this.state.count}></Count>
      </div>
    );
  }
}
