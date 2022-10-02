import React from 'react'
import './App.css'
import UseEffect from './useEffect/UseEffect'
import UseState from './useState/UseState'
import UseReducer from './useReducer/UseReducer'
import UseMemo from './useMemo/UseMemo'
import UseRef from './useRef/UseRef'

const App = () => {
  return (
    <>
    <UseState/>
    <hr/>
    <UseEffect/>
    <hr/>
    <UseReducer/>
    <hr/>
    <UseMemo/>
    <hr/>
    <UseRef/>
    <hr/>
    </>
  )
}

export default App