import React, { useEffect, useState } from 'react'
import instance from './instance'
import urls from './sourceUrl'

function Banner() {

  const [randomMovie, setRandomMovie] = useState({})
  const img_base_path = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    instance.get(urls.fetchNetflixOriginals)
    .then((result) => {
      setRandomMovie(result.data.results[Math.floor(Math.random() * 20)]) //10.4
    })
  }, [])
  return (
    <section className='banner' style={{backgroundImage: "url(" + img_base_path + randomMovie.backdrop_path+ ")"}}></section>
  )
}

export default Banner