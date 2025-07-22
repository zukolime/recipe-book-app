import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useMealData from "../../services/getMealData";
import FavBtn from "../FavBtn/FavBtn";

import "../CardItem/card-item.scss";

const CardItem = () => {
  const [recipeList, setRecipeList] = useState<any[]>([]);
  const { getAllRecipes }: any = useMealData();

  useEffect(() => {
    getAllRecipes().then(onRecipesLoaded);
  }, []);

  const onRecipesLoaded = (recipes: any[]) => {
    setRecipeList(recipes.slice(0, 6));
  };

  const renderItems = (arr: any) => {
    const items = arr.map((item: any, i: number) => {
      return (
        <li key={i} className="cards__item">
          <Link to={`/recipe/${item.id}`}>
            <div
              className="cards__header"
              style={{
                background: `url(${item.thumbnail}) center / cover no-repeat`,
              }}
            >
              <FavBtn />
            </div>
            <div className="cards__info">
              <h2 className="cards__title">{item.name}</h2>
              <div className="cards__footer">
                <span className="cards__category">{item.category}</span>
                <span className="cards__area">{item.area}</span>
              </div>
            </div>
          </Link>
        </li>
      );
    });

    return items;
  };

  const items = renderItems(recipeList);

  return <>{items}</>;
};

export default CardItem;
