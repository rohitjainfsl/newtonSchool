import React, { useDeferredValue, useState } from 'react'
import Logo from './images/netflix-logo.png'
import Emoji from './images/green-blue-emoji.png'

function Header() {

  const [isDark, setIsDark] = useState(false)

  window.onscroll = () => {
    window.scrollY > 300 ? setIsDark(true) : setIsDark(false)
  }


  return (
    <header className={isDark ? "isDark" : ""}>
      <img className='logo' src={Logo} alt="Logo" />
      <img src={Emoji} alt="Emoji" />
    </header>
  )
}

export default Header