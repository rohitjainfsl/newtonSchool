import React, { useState } from 'react'

const App = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [dimensions, setDimensions] = useState([])

  function handleBoxCreation(e) {
    const box = [width, height, backgroundColor]
    setDimensions([...dimensions, box])
    setWidth('')
    setHeight('')
    setBackgroundColor('')
  }

  return (
    <div id="main">
      <h1>Box Creator</h1>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="text"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <button className='create-btn' onClick={handleBoxCreation}>Create Box</button>
      <div id="box-container">
        {dimensions.length > 0 ?
          dimensions.map((dimension) => {
            return <div style={{ width: dimension[0] + "px", height: dimension[1] + "px", backgroundColor: dimension[2] }}></div>
          })
          : ''}
      </div>
    </div>
  );
};


export default App;