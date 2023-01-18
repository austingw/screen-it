import { useState } from "react";
import MovieForm from "./components/MovieForm";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="App">
      <h1>Screen it</h1>
      <MovieForm />
      <ListItem />
    </div>
  );
}

export default App;
