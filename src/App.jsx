
import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
import Profile from './pages/Profile'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Homepage/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <h1 className='text-red-500'>this is my react project</h1>

    </BrowserRouter>
  )
}

