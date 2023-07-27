import React, { useEffect, useState } from "react";
import instance from "./instance";

function MovieRow(props) {
  const API_KEY = "8125db8f67d23da1d30f6063b1b794b8";
  const img_base_path = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [iframeSrc, setIframeSrc] = useState({});

  //As soon as we will use state with axios, we will see some side effects.
  // The side effect in this case is an infinite loop.
  //To counter or curb that side effect, we need a hook called useEffect

  //UseEffect helps us in telling react to execute a particular code when we want it to execute. When we want to execute a code just once, or we want it to execute on updation of some other element.

  // In our particular case, we will use useEffect hook to tell react to only execute lines 24 & 25 if they are not executed before

  useEffect(() => {
    instance.get(props.endPoint).then((result) => {
      console.log(result.data.results);
      setMovies(result.data.results);
    });
  }, []);

  function handleClick(e, id) {
    console.log(id)
    setIframeSrc({})
    instance
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((data) => {
        console.log(data.data.results)
        const youtubeVideoObject = data.data.results.find((v) => {
          return v.site === "YouTube" && v.type === "Trailer";
        });
        if (youtubeVideoObject) {
          // console.log(youtubeVideoObject);
          setIframeSrc(youtubeVideoObject);}
      });
  }

  return (
    <>
      <div className={props.bigger ? "movierow originals" : "movierow"}>
        <h1>{props.heading}</h1>
        <div className="movie-wrapper">
          {movies.map((movie, index) => {
            return (
              <img
                key={index}
                src={img_base_path + movie.poster_path}
                alt={movie.name}
                onClick={(e) => handleClick(e, movie.id)}
              />
            );
          })}
        </div>
      </div>
      {Object.keys(iframeSrc).length > 0 ? (
        <div className="modal">
          <div className="trailer">
            <iframe title="movieTrailer" src={`https://youtube.com/embed/${iframeSrc.key}`} ></iframe>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default MovieRow;
