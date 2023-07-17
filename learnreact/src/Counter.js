import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  );
}
export default Counter;
