import React from 'react'
import axios from 'axios'

function App() {
    // fetch("https://randomuser.me/api")
    // .then((response) => {return response.json()})
    // .then((result) => {console.log(result)})

    axios.get("https://randomuser.me/api")
    .then((result) => {console.log(result)})

  return (
    <div>App</div>
  )
}

export default App