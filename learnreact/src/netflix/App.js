import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import MovieRow from "./MovieRow";
import urls from "./sourceUrl";
import './netflix.css'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <MovieRow endPoint={urls.fetchNetflixOriginals} heading="Netflix Originals" bigger={true} />
      <MovieRow endPoint={urls.fetchTopRated} heading="Top Rated" />
      <MovieRow endPoint={urls.fetchActionMovies} heading="Action Movies" />
      <MovieRow endPoint={urls.fetchComedyMovies} heading="Comedy Movies" />
      <MovieRow endPoint={urls.fetchHorrorMovies} heading="Horror Movies" />
      <MovieRow endPoint={urls.fetchRomanceMovies} heading="Romantic Movies" />
      <MovieRow endPoint={urls.fetchTrending} heading="Trending Movies" />
      <MovieRow endPoint={urls.fetchDocumentaries} heading="Documentaries" />
    </>
  );
}

export default App;
