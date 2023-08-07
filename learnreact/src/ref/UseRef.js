import React, { useRef } from "react";
import ChildComponent from "./ChildComponent";

function UseRef() {
  const inputRef = useRef();

  function handleClick() {
    // console.log(inputRef.current.value)
    console.log(inputRef.current.getValue())
  }

  const name = 'Rohit'

  return (
    <div>
      <ChildComponent ref={inputRef} name={name} />
      
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default UseRef;
