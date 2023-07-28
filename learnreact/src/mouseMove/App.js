import React, {useState} from "react";
import { useEffect } from "react";

function App() {
    const [x, setX] = useState('')
    const [y, setY] = useState('')
    useEffect(() => {
        console.log("Hello")
        window.addEventListener("mousemove", (e) => {
            setX(e.clientX)
            setY(e.clientY)
        })
    }, [])
  return (
    <>
      <h2>Capture Mouse Movement</h2>

      <p>
        X: {x} :: Y {y}
      </p>
    </>
  );
}

export default App;
