import React from 'react'
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <>
    <Link to='/'>Home</Link>
    <Link to='/Student'>Student</Link>
    <Link to='/Contact'>Contact</Link>
    </>
  )
}

export default Navigation