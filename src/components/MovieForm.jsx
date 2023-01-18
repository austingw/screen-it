import { Rating } from "react-simple-star-rating";
import { useState } from "react";
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
          name="topText"
        />
      </div>
      <div className="form-row ">
        <label>Category</label>
        <select
          type="text"
          id="category"
          placeholder="Select a category"
          className="form-inputs arrow"
          name="bottomText"
        />
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
