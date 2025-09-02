import { Link } from "react-router-dom";
import FavBtn from "../FavBtn/FavBtn";

import "../CardItem/card-item.scss";

interface Recipe {
  id: string;
  name: string;
  thumbnail: string;
  category: string;
  area: string;
}

const CardItem = ({ recipe }: { recipe: Recipe }) => {
  return (
    <li className="cards__item">
      <Link to={`/recipe/${recipe.id}`}>
        <div
          className="cards__header"
          style={{
            background: `url(${recipe.thumbnail}) center / cover no-repeat`,
          }}
        >
          <FavBtn />
        </div>
        <div className="cards__info">
          <h2 className="cards__title">{recipe.name}</h2>
          <div className="cards__footer">
            <span className="cards__category">{recipe.category}</span>
            <span className="cards__area">{recipe.area}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CardItem;
