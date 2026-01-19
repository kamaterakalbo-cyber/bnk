import { useState } from 'react'
import './App.css'
import Homepage from './Componient/Homepage/Homepage.jsx'
import Navbar from './Componient/Navbar/Navbar.jsx'
import Footer from './Componient/Footer/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './Componient/About/About.jsx'
import Login from './Componient/Login/Login.jsx'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about-us' element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
