import { useState } from 'react'
import Home from './pages/Home/Home.jsx'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login/Login'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
   
    
      
    </>
  )
}

export default App
