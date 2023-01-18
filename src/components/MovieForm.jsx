export default function MovieForm() {
  return (
    <form>
      <div className="form-row">
        <label>Name</label>
        <input
          type="text"
          id="top-text"
          placeholder="Name of the movie"
          className="form-inputs"
          name="topText"
        />
      </div>
      <div className="form-row">
        <label>Category</label>
        <input
          type="text"
          id="bottom-text"
          placeholder="Select a category"
          className="form-inputs"
          name="bottomText"
        />
      </div>
      <div className="form-row">
        <label>Rating</label>
      </div>
      <button className="submit-btn">Add Movie</button>
    </form>
  );
}
