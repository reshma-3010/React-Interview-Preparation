import React ,{useState,useEffect}from 'react'

const UseEffect = () => {
const [count,setCount]=useState(0);
useEffect(()=>{
    setTimeout(()=>{
        setCount((count)=>count+1)
    },1000);
},[]);
  return (
    <>
    <p>The useEffect Hook allows you to perform side effects in your components.</p>
    <p>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
    <p>useEffect accepts two arguments. The second argument is optional.</p>
    <p>They are function and dependency</p>
    <h3>I have rendered {count} times!</h3>
    </>
  )
}

export default UseEffect