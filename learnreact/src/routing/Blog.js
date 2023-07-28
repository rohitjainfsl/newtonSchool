import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Blog() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response.data)
      setPosts(response.data)
    })
  }, [])

  return (
    <>
      <h2>Blog Posts</h2>
      <div className='blogposts'>
        {
          posts.map((post, index) => {
            return (
              <div className='blogpost' key={index}>
                <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                <p>{post.body}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Blog