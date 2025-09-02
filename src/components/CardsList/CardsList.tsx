import { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";
import Spinner from "../Spinner/Spinner";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import useMealData from "../../services/getMealData";

import "../CardsList/cards-list.scss";

const CardsList = () => {
  const [recipeList, setRecipeList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const { getAllRecipes } = useMealData();

  useEffect(() => {
    getAllRecipes().then(onRecipesLoaded).catch(onError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRecipesLoaded = (recipes: any[]) => {
    setRecipeList(recipes.slice(0, 6));
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const renderItems = recipeList.map((recipe) => <CardItem key={recipe.id} recipe={recipe} />);

  const spinner = loading ? <Spinner /> : null;
  const errorMsg = error ? <ErrorMsg /> : null;
  const content = !(loading || error) ? <ul className="cards__wrapper">{renderItems}</ul> : null;

  return (
    <section className="cards">
      <div className="container">
        {spinner}
        {errorMsg}
        {content}
      </div>
    </section>
  );
};

export default CardsList;
