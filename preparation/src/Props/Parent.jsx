import React from 'react'
import Child from './Child'

const Parent = () => {
    const fruits={
        fruit:"Mango",
        color:"yellow"
    }
  return (
    <>
    <Child fruits={fruits}/>
    </>
  )
}

export default Parent