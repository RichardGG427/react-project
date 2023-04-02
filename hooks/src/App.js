import React, { useState, useEffect } from "react";

//use useEffect in this component
function Effect() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    //process effect logic
    document.title=`you clicked ${count} times`
    return ()=>{
        console.log('component unmounted or updated');
        
    }

  },[0])
  return (
    <div>
      <div>you clicked {count} times</div>
      <button onClick={() => setCount(count + 1)}>Click+1</button>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(10);
  return (
    <div>
      I am function component, learning hooks
      <div>you clicked {count} times</div>
      <button onClick={() => setCount(count + 1)}>Click+1</button>
      <button onClick={() => setCount(count - 1)}>Click-1</button>
      <p>use the component with useEffect</p>
      {count>=10?<Effect></Effect>:null}
    </div>
  );
}
