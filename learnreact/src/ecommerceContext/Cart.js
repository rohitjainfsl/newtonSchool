import React, { useContext } from 'react'
import { ecommerceContext } from './App'

function Cart() {
  const {cart, setCart} = useContext(ecommerceContext)
  return (
    <>
      <h2>Your Cart</h2>
      <div className='cart-items'>
        {
          cart.map((item, index) => {
            return(
              <div className='item'>
                <img src={item.image} alt={item.title} />
              </div>
            )
          })
        }
      </div>
      
    </>
  )
}

export default Cart