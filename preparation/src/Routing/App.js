import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import NotFound from './NotFound'
import Navigation from './Navigation'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Student' element={<Student/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App