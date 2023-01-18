import { useState } from "react";
import MovieForm from "./components/MovieForm";
import ListItem from "./components/ListItem";
import defaultMovies from "./defaultMovies";

function App() {
  const movieList = defaultMovies.map((movie) => (
    <ListItem
      name={movie.name}
      category={movie.category}
      rating={movie.rating}
    />
  ));

  return (
    <div className="App">
      <div className="app-title">
        <h1>Screen it</h1>
        <div className="line" />
      </div>
      <MovieForm />
      <div className="movie-list">{movieList}</div>
    </div>
  );
}

export default App;
