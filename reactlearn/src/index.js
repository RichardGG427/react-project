import React from "react";
import ReactDOM from "react-dom";
// import App from './App'
// import LifeCycle from './LifeCycle.js'
// import App1 from './App1'
// import Purememo from './Purememo'
// import Composition from "./Composition";
import HOC from './HOC/HOC.js'

// ReactDOM.render(<App></App>,document.getElementById('root'))
//Demonstrate lifecycle
// ReactDOM.render(<LifeCycle></LifeCycle>,document.getElementById('root'))
//Demonstrate ant design
// ReactDOM.render(<App1></App1>,document.getElementById('root'))
//show purecomponent and memo
// ReactDOM.render(<Purememo></Purememo>,document.getElementById('root'))
//Composite Component
// ReactDOM.render(<Composition></Composition>, document.getElementById("root"));
//HOC
ReactDOM.render(<HOC title="I am High Order Component tester"></HOC>,document.getElementById("root"))