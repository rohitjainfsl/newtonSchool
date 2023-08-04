import React, {useContext} from 'react'
import { ecommerceContext } from './App'

function Header() {

    const obj = useContext(ecommerceContext)


  return (
    <div>{obj.cart.length}</div>
  )
}

export default Header