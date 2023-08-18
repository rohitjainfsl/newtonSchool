import React, { useState, useEffect } from "react";
import './styles.css'


function App() {
  
  return (
    <div className="counter-widget">
      <div className="count"></div>
      <button
        className="increment"
      >
        Increment
      </button>
      <button
        className="decrement"
      >
        Decrement
      </button>

        <div className="quote">Random Quote: {quote}</div>

    </div>
  );
}

export default App;
