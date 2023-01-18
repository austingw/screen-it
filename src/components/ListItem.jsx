export default function ListItem(props) {
  return (
    <div className="list-item">
      <div className="item-icon">
        {
          //Chained string methods turn the movie name into an acronym
          props.name
            .replace("The", "")
            .replace("the", "")
            .match(/[A-Z]/g)
            .join("")
        }
      </div>
      <div className="item-text">
        <div className="name">{props.name}</div>
        <div className="category">{props.category}</div>
      </div>
      <div>{props.rating}</div>
    </div>
  );
}
