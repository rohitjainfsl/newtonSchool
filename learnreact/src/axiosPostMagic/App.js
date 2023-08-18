import React, { useEffect } from 'react'
import axios from 'axios'

function App() {

    const newTodo = {
        userId: 11,
        id: 200,
        title: 'This is a custom todo created by Rohit Jain',
        completed: false
    }

    useEffect(() => {
        axios.post("https://jsonplaceholder.typicode.com/todos/", newTodo)
        .then((response) => console.log(response))
    }, [])

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/todos/")
    //     .then((response) => console.log(response))
    // }, [])


    useEffect(() => {
        axios.delete("https://jsonplaceholder.typicode.com/todos/201")
        .then((response) => console.log(response))
    }, [])

  return (
    <div>App</div>
  )
}

export default App