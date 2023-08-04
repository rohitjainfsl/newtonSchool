import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import { ecommerceContext } from './App'

function Header() {
    const {cart} = useContext(ecommerceContext)

  return (
    <header>
        <h1><Link to="/">Ecommerce</Link></h1>
        <nav>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cart">Cart <span>{cart.length}</span></Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header