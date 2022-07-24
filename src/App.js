import React from 'react'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Home from './Components/home/Home'
import Navbar from './Components/navbar/Navbar'
import Services from './Components/services/Services'
import './app.css'

const App = () => {
  return (
    <>
    <Navbar/>
     <Home/>
     <About/>
     <Services/>
     <Contact/>
    </>
  )
}

export default App