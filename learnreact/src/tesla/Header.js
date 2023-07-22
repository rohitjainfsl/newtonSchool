/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Logo from './images/logo.svg'
import CloseIcon from '@mui/icons-material/Close';

function Header() {

  const [menu, setMenu] = useState(false)

  function menuOpen(e){
    e.preventDefault()
    setMenu(true)
  }
  function menuClose(e){
    setMenu(false)
  }

  return (
    <header>
        <img src={Logo} alt="Logo" />

        <ul>
            <li><a href="">Model S</a></li>
            <li><a href="">Model 3</a></li>
            <li><a href="">Model X</a></li>
            <li><a href="">Model Y</a></li>
            <li><a href="">Solar Roof</a></li>
            <li><a href="">Solar Panels</a></li>
        </ul>
        
        <ul>
            <li><a href="">Shop</a></li>
            <li><a href="">Account</a></li>
            <li><a href="" onClick={menuOpen}>Menu</a></li>
        </ul>


        <ul className='sidebar' style={{right: (menu) ? "0" : '-250px'}}>
          <CloseIcon className='close' onClick={menuClose} />
          <li><a href="">Model S</a></li>
          <li><a href="">Model 3</a></li>
          <li><a href="">Model X</a></li>
          <li><a href="">Model Y</a></li>
          <li><a href="">Solar Roof</a></li>
          <li><a href="">Solar Panels</a></li>
          <li><a href="">Existing Inventory</a></li>
          <li><a href="">Used Inventory</a></li>
          <li><a href="">Trade In</a></li>
          <li><a href="">Test Drive</a></li>
          <li><a href="">Powerwall</a></li>
          <li><a href="">Commercial Energy</a></li>
        </ul>

    </header>
  )
}

export default Header