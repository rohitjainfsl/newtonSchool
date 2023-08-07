import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { Loader } from "./Loader";
import { PhotoFrame } from "./PhotoFrame";
import axios from "axios";
const App = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (input.length > 0) {
      setIsLoading(true);
      axios.get("https://jsonplaceholder.typicode.com/photos/"+input)
      .then((response) => {
        // console.log(response)
        setUrl(response.data.url)
        setTitle(response.data.title)
        setIsLoading(false)
      })
    } else setIsLoading(false);
  }, [input]);

//   console.log(input);

  return (
    <>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {isLoading ? <Loader /> : input !== "" ? <PhotoFrame url={url} title={title} /> : ""}
    </>
  );
};

export default App;
