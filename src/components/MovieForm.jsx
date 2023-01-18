export default function MovieForm() {
  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        id="top-text"
        placeholder="Name of the movie"
        className="form-inputs"
        name="topText"
      />
      <label>Category</label>
      <input
        type="text"
        id="bottom-text"
        placeholder="Select a category"
        className="form-inputs"
        name="bottomText"
      />
      <label>Rating</label>
      <button className="submit-btn">Add Movie</button>
    </form>
  );
}
