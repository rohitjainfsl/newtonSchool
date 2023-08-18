import React, { Component, useState } from "react";


const App = () => {
  const [workDuration, setWorkDuration] = useState(25)
  const [breakDuration, setBreakDuration] = useState(5)
  const [inputDisabled, setInputDisabled] = useState(false)
  const [startDisabled, setStartDisabled] = useState(false)

  function handleWorkDuration(e){
    if(e.target.value > 0)  setWorkDuration(e.target.value)
    else if((e.target.value > -1) && breakDuration > 0)   setWorkDuration(e.target.value)
  }
  function handleBreakDuration(e){
    if(e.target.value > 0)  setBreakDuration(e.target.value)
    else if((e.target.value > -1) && workDuration > 0)   setBreakDuration(e.target.value)
  }

  function handleSettingValues(){
    setInputDisabled(true)
    setInterval(() => {}, workDuration)
  }

  return (
    <div id="main">
      <button data-testid="set-btn">Set</button>
      <button data-testid="start-btn" onClick={handleSettingValues} disabled={startDisabled}>Start</button>
      <button data-testid="stop-btn">Stop</button>
      <button data-testid="reset-btn">Reset</button>

      <input type="text" data-testid="work-duration" value={workDuration} onChange={handleWorkDuration} disabled={inputDisabled}/>
      <input type="text" data-testid="break-duration" value={breakDuration} onChange={handleBreakDuration} disabled={inputDisabled}/>
      <p>Work Duration: {workDuration}</p>
      <p>Break Duration: {breakDuration}</p>
      <p></p>
    </div>
  )
}


export default App;