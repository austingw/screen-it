import { Rating } from "react-simple-star-rating";
import EmptyStar from "./EmptyStar";
import FilledStar from "./FilledStar";

export default function ListItem(props) {
  return (
    <div className="list-item">
      <div
        className={
          //Dynamic class name w/ font sizes based on acronym length
          `item-icon${
            props.name
              .replace("The", "")
              .replace("the", "")
              .match(/[A-Z]/g)
              .join("").length
          }`
        }
      >
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
      <div>
        <Rating
          initialValue={props.rating}
          readonly={true}
          emptyIcon={<EmptyStar />}
          fillIcon={<FilledStar />}
        />
      </div>
    </div>
  );
}
