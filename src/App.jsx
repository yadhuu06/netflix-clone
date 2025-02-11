import { useState } from 'react'
import Home from './pages/Home/Home.jsx'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player.jsx'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/player/:id' element={<Player/>}/>
    </Routes>
   
    
      
    </>
  )
}

export default App
