import React, { useContext, useState } from 'react'
import { ecommerceContext } from './App'

function Products() {
    const obj = useContext(ecommerceContext)
  return (
    <>
        <h1>Products</h1>
        <p>{obj.cart.length}</p>
    </>
  )
}

export default Products