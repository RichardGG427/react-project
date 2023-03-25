import React from 'react'

function Dialog(props){
    return (
        <div style={{border:`5px solid ${props.color || "green"}`}}>
            {/* 相当于vue匿名插槽 */}
            {props.children}
            {/* 相当于vue具名插槽 */}
            {props.btn}
        </div>
    )

}

export default function Composition() {
    const confirmBtn=(
        <button onClick={()=>{alert('Is react cool?')}}>Confirm</button>
    )
  return (
    <div>
        <h1>Composition Component</h1>
        <Dialog color='pink' btn={confirmBtn}>
            <h2>welcome to learning</h2>
            <p>React</p>

        </Dialog>
    </div>
  )
}
