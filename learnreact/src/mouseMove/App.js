import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  function handleMouseMove(e) {
    setX(e.clientX);
    setY(e.clientY);
  }
  useEffect(() => {
    console.log("Hello");
    window.addEventListener("mousemove", handleMouseMove);


    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }

  },
    
  []);



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
