import React,{useState} from 'react'

const UseState = () => {
    const [count,setCount]=useState(0);
  return (
    <>
    <p>The useState() is a Hook that allows you to have state variables in functional components .</p>
      <p> so basically useState is the ability to encapsulate local state in a functional component.</p>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Click here to increase the count</button>
    <button onClick={()=>{setCount(count-1)}}>Click here to decrease the count</button>
    </>
  )
}

export default UseState
