import React, { useContext } from "react";
import Child from './ContextChild'
import {Richard} from '../store/index'

//create context object
// export const Context = React.createContext({ name: "Richard", age: "18" });

export default function UseContext() {
  const ctx = useContext(Richard);
  console.log(ctx);

  return <div>
    <h1>showcase of useContext</h1>
    <div>I am {ctx.name}---{ctx.age} years old</div>
    <p>use child component</p>
    <Child></Child>
  </div>;
}
