import React,{useEffect} from 'react'

//pack by myself begin with use

const useChangeTitle = (title)=>{
    useEffect(()=>{
        document.title=title
    },[title])
}

export default function CustomHooks() {
    useChangeTitle('custom title hooks11')
  return (
    <div>Test packed hooks</div>
  )
}
