export default function ListItem(props) {
  return (
    <div className="list-item">
      <div className="item-icon">{props.name.match(/[A-Z]/g).join("")}</div>
      <div className="item-text">
        <div className="name">{props.name}</div>
        <div className="category">{props.category}</div>
      </div>
      <div>{props.rating}</div>
    </div>
  );
}
