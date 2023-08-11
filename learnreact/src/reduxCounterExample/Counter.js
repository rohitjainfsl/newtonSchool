import React from 'react'
import { increment, decrement } from './slice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const dispatch = useDispatch()
    const stateFromStore = useSelector((state) => {return state.counterR.counter})
  return (
    <>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <p>{stateFromStore}</p>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default Counter