import React from 'react'

const Child = (props) => {
  return (
    <>
    <h1>Fruit Name:{props.fruits.fruit}</h1>
    <h1>Fruit Color:{props.fruits.color}</h1>
    </>
  )
}

export default Child