import React from "react";
import ReactDOM from "react-dom";
// import App from './App'
// import LifeCycle from './LifeCycle.js'
// import App1 from './App1'
// import Purememo from './Purememo'
// import Composition from "./Composition";
// import HOC from "./HOC/HOC2.js";
// import Context1 from "./HOC/Context1.js"
// import Context2 from "./HOC/Context2.js"
// import FirstRedux from "./Reduxfolder/FirstRedux";
// npm install react-router-dom
// import { Provider } from "react-redux";
// import ReactRedux from "./Reduxfolder/ReactRedux";
// import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
// import { firstReducer } from "./Reduxfolder/count.redux";

import RouterSample from "./ReactRouter/RouterSample";

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
// ReactDOM.render(<HOC title="I am High Order Component tester"></HOC>,document.getElementById("root"))
//HOC chain
// ReactDOM.render(
//   <HOC title="I am High Order Component tester"></HOC>,
//   document.getElementById("root")
// );
//context
// ReactDOM.render(
//   <Context2></Context2>,
//   document.getElementById("root")
// );

//1st redux accumulator
// ReactDOM.render(
//   <FirstRedux></FirstRedux>,
//   document.getElementById("root")
// );

// const render = () => {
//   ReactDOM.render(<FirstRedux></FirstRedux>, document.getElementById("root"));
// };

// render();

// store.subscribe(render);

// const store = createStore(firstReducer, applyMiddleware(thunk,logger))
// ReactDOM.render(<Provider store={store}><ReactRedux></ReactRedux></Provider>,document.getElementById("root")
// );


//show of react router
ReactDOM.render(
  <RouterSample></RouterSample>,
  document.getElementById("root")
);