import { useState } from "react";

import MovieForm from "./components/MovieForm";
import ListItem from "./components/ListItem";
import defaultMovies from "./defaultMovies";

function App() {
  const movieList = defaultMovies.map((movie) => {
    //Dynamically generate list items with lines between them
    if (movie.name !== "The Sandlot") {
      return (
        <>
          <ListItem
            name={movie.name}
            category={movie.category}
            rating={movie.rating}
          />
          <div className="line" />
        </>
      );
    } else {
      return (
        <ListItem
          name={movie.name}
          category={movie.category}
          rating={movie.rating}
        />
      );
    }
  });

  return (
    <div className="App">
      <div className="app-title">
        <h1>Screen it</h1>
        <div className="line" />
      </div>
      <MovieForm />
      <div className="line" />

      <div className="movie-list">{movieList}</div>
    </div>
  );
}

export default App;
