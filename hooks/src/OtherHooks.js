import React, { useMemo,useCallback,useRef } from "react";

const UseRefComp = () => {
    const inputref=useRef()
    const getValue=()=>{
        console.log(inputref.current.value);
        
    }
    return (
        <div>
            <input ref ={inputref} type='text'/>
            <button onClick={getValue}>get input value</button>
        </div>
    )
}

export default function OtherHooks() {
  const obj1 = { height: "180", name: "Richard", age: "18" };
  const obj2 = { height: "170", name: "Richard2", age: "28", gender: "famale" };
  //use useMemo
//   const memoValue = useMemo(() => Object.assign(obj1, obj2), [obj1, obj2]);
  //use useCallback
  const memoCallback = useCallback(() => Object.assign(obj1, obj2), [obj1, obj2]);
  //output usememo returned value
//   console.log(memoValue);
  //output useCallback returned value
  console.log(memoCallback);
  

  return <div>
    {/* use useMemo returned value */}
    {/* name:{memoValue.name} */}
    {/* use useCallback returned value */}
    {memoCallback().name}
    <UseRefComp></UseRefComp>
    </div>;
}
