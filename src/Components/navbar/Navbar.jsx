import React, { useState } from 'react'
import './navbar.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
    const [active , setActive] = useState('navbar')
    const showMenu = ()=>{
       setActive('navbar displayMenu')
    }
    const removeMenu = ()=>{
       setActive('navbar')
    }
  return (
    <header className="header">
        <div className="logoDiv">
            <h2>IsraTech</h2>
        </div>
        <div className={active}>
            <ul className="navMenu">
                <li className="navItem">
                    <a href="#" className="navLink">Home</a>
                </li>
                <li className="navItem">
                    <a href="#about" className="navLink">About</a>
                </li>
                <li className="navItem">
                    <a href="#services" className="navLink">Services</a>
                </li>
                <li className="navItem">
                    <a href="#contact" className="navLink">Contact</a>
                </li>
            </ul>

            <div onClick={removeMenu} className="closeNavbarIcon">
                 <AiFillCloseCircle className='icon'/>
            </div>
        </div>
        <div onClick={showMenu} className="toggleNavbarIcon">
          <AiOutlineMenu className='icon'/>
        </div>
    </header>
  )
}

export default Navbar