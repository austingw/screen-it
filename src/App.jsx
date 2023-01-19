import { useEffect, useState } from "react";

import MovieForm from "./components/MovieForm";
import ListItem from "./components/ListItem";
import defaultMovies from "./defaultMovies";

function App() {
  const [movieData, setMovieData] = useState(defaultMovies);
  const [ratingValue, setRatingValue] = useState(0);
  const [newMovie, setNewMovie] = useState({
    name: "",
    category: "",
    rating: 0,
  });

  const handleRating = (rate) => {
    setRatingValue(rate);
    handleChange();
  };

  function handleChange() {
    const { name, value } = event.target;
    setNewMovie((movieData) => {
      return {
        ...movieData,
        [name]: value,
        rating: ratingValue,
      };
    });
    console.log(newMovie);
  }

  function addMovie(movie) {
    event.preventDefault();
    console.log(newMovie);
    console.log(movieData);
    setMovieData((prevList) => [newMovie, ...prevList]);
  }

  const movieList = movieData.map((movie) => {
    //Dynamically generates list items with lines between them
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
      <MovieForm
        handleSubmit={addMovie}
        handleRating={handleRating}
        handleChange={handleChange}
      />
      <div className="line" />
      <div className="movie-list">{movieList}</div>
    </div>
  );
}

export default App;
