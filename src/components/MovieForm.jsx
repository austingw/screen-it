import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import EmptyStar from "./EmptyStar";
import FilledStar from "./FilledStar";

export default function MovieForm() {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate) => {
    setRatingValue(rate);
  };

  return (
    <form>
      <div className="form-row">
        <label>Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name of the movie"
          className="form-inputs"
          name="name"
        />
      </div>
      <div className="form-row ">
        <label>Category</label>
        <select
          type="text"
          id="category"
          className="form-inputs arrow"
          name="category"
          defaultValue="Select"
        >
          <option value="" selected hidden>
            Select a category
          </option>
          <option value="Action">Action/Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Documentary">Documentary</option>
          <option value="Drama">Drama</option>
          <option value="Horror/Thriller">Horror/Thriller</option>
        </select>
      </div>
      <div className="form-row">
        <label>Rating</label>
        <Rating
          disableFillHover
          onClick={handleRating}
          emptyIcon={<EmptyStar />}
          fillIcon={<FilledStar />}
        />
      </div>
      <button className="submit-btn">Add Movie</button>
    </form>
  );
}
