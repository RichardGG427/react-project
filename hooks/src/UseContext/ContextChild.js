import React, { useContext } from "react";
import {Richard2} from '../store/index'



export default function UseContext() {
  const ctx = useContext(Richard2);

  return <div>

    <div>I am {ctx.name}---{ctx.age} years old</div>
  </div>;
}
