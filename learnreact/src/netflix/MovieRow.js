import React, { useEffect, useState } from "react";
import instance from "./instance";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function MovieRow(props) {
  const API_KEY = "";
  const img_base_path = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

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

  function handleClick(movie) {
    if (trailerURL) setTrailerURL("");
    else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log(url)
          const urlParam = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParam.get("v"));
        })
        .catch((err) => console.log(err));
    }
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
                onClick={() => handleClick(movie)}
              />
            );
          })}
        </div>
        {trailerURL ? (
          <YouTube
            videoId={trailerURL}
            opts={{ height: "390", width: "100%", autoplay: 1 }}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default MovieRow;
