import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [counter, setCounter] = useState(0);
  const [incDisabled, setIncDisabled] = useState(false);
  const [DecDisabled, setDecDisabled] = useState(false);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    if (counter === 0) {
      setIncDisabled(false);
      setDecDisabled(true);
    }
    if (counter === 10) {
      setIncDisabled(true);
      setDecDisabled(false);
      fetchQuote();
    }
    if (counter > 0 && counter < 10) {
      setIncDisabled(false);
      setDecDisabled(false);
    }
    if (counter === 5) {
      fetchQuote();
    }
  }, [counter]);

  function fetchQuote() {
    axios
      .get("https://api.quotable.io/quotes/random")
      .then((response) => setQuote(response.data[0].content));
  }

  function handleCount(e) {
    if (e.target.innerHTML === "Increment") {
      if (counter < 10) {
        setCounter(counter + 1);
      }
    } else {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }
  }

  return (
    <div className="counter-widget">
      <div className="count">Count: {counter}</div>
      <button
        className="increment"
        onClick={handleCount}
        disabled={incDisabled ? "disabled" : ""}
      >
        Increment
      </button>
      <button
        className="decrement"
        onClick={handleCount}
        disabled={DecDisabled ? "disabled" : ""}
      >
        Decrement
      </button>

      {/* {counter === 5 || counter === 10 ? (
        <div className="quote">Random Quote: {quote}</div>
      ) : (
        ""
      )} */}
    </div>
  );
}

export default App;
