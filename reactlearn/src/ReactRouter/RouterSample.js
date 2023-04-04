import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      React Router's use
      {/* write Router Navigation */}
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/course">Course</Link>
        </li>
        <li>
          <Link to="/mine">My</Link>
        </li>
        <li>
          <Link to="/mineasd">Not existed</Link>
        </li>
      </ul>
      {/* Router Set */}
      <Switch>
        {" "}
        <Route exact path="/" component={Home}></Route>
        <Route path="/course" component={Course}></Route>
        <Route path="/login" component={Login}></Route>
        {/* <Route path="/mine" component={Mine}></Route> */}
        <RouteGuard path="/mine" component={Mine}></RouteGuard>
        {/* configure course detail page,show trans params and get params */}
        <Route path="/detail/:course" component={Detail}></Route>
        {/* configure 404 page */}
        <Route component={notFound}></Route>
      </Switch>
    </div>
  );
}

//write router guard to control authority
class RouteGuard extends Component {
  // state={
  //     isLogin:true
  // }
  render() {
    const { component: Component, ...otherProps } = this.props;
    return (
      <Route
        {...otherProps}
        render={(props) =>
          auth.isLogin ? (
            <Component {...props}></Component>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location.pathname },
              }}
            ></Redirect>
          )
        }
      ></Route>
    );
  }
}

//login page
class Login extends Component {
  state = {
    isLogin: false,
  };
  login = () => {
    auth.login(() => {
      this.setState({
        isLogin: true,
      });
    });
  };
  render() {
    const from = (this.props.location.state&&this.props.location.state.from) || "./";
    if (this.state.isLogin) {
      return <Redirect to={from}></Redirect>;
    }
    return (
      <div>
        <p>Please Login first</p>
        <button onClick={this.login}>login</button>
      </div>
    );
  }
}

//mock api
const auth = {
  isLogin: false,
  login(callback) {
    this.isLogin = true;
    setTimeout(callback, 1000);
  },
};

//detail page
function Detail({ match, location, history }) {
  console.log(match, location, history);

  return (
    <div>
      I am {match.params.course} detail page
      <button
        onClick={() => history.push({ pathname: "/", state: { foo: "bar" } })}
      >
        back to homepage
      </button>
    </div>
  );
}

//homepage component
function Home({ location }) {
  if (location.state && location.state.foo) {
    console.log("params from router" + location.state.foo);
  }
  return (
    <div>
      HomePage
      {location.state && location.state.foo ? (
        <p>the params from detail page is {location.state.foo}</p>
      ) : null}
    </div>
  );
}
//course component
function Course() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/detail/react">react</Link>
        </li>
        <li>
          <Link to="/detail/vue">vue</Link>
        </li>
      </ul>
    </div>
  );
}
//Mine component
function Mine() {
  return (
    <div>
      <h2>user center</h2>
      <ul>
        <li>
          <Link to="/mine/userinfo">user info</Link>
        </li>
        <li>
          <Link to="/mine/order">user order</Link>
        </li>
      </ul>
      {/* router configuration */}
      <Switch>
        <Route
          path="/mine/userinfo"
          component={() => <div>userinfo</div>}
        ></Route>
        <Route
          path="/mine/order"
          component={() => <div>userorder</div>}
        ></Route>
        {/* router redirection */}
        <Redirect to="/mine/userinfo"></Redirect>
      </Switch>
    </div>
  );
}
//404 component
function notFound() {
  return <div>404 not found page</div>;
}

export default function RouterSample() {
  return (
    <div>
      <h1>show of React Router 4.*</h1>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </div>
  );
}
