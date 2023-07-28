import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

function SingleBlog() {

  const [singlePost, setSinglePost] = useState({})

  const {id} = useParams()

  // const param = useParams()

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((response) => {
      console.log(response.data)
      setSinglePost(response.data)
    })
  }, [])

  return (
    <>
      <h3>Single Blog</h3>
      <div className='singleBlog'>
        <h4>{singlePost.title}</h4>
        <p>{singlePost.body}</p>
      </div>
    </>
  )
}

export default SingleBlog