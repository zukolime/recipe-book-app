import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import useMealData from "../../services/getMealData";
import FavBtn from "../FavBtn/FavBtn";
import "../CardItem/card-item.scss";

const CardItem = () => {
  const [recipeList, setRecipeList] = useState<any[]>([]);
  const [displayedRecipes, setDisplayedRecipes] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const recipesPerPage = 6;
  const { getAllRecipes }: any = useMealData();

  useEffect(() => {
    setIsLoading(true);
    getAllRecipes()
      .then((recipes: any[]) => {
        setRecipeList(recipes);
        setDisplayedRecipes(recipes.slice(0, recipesPerPage));
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [getAllRecipes]);

  const loadMoreRecipes = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;

    if (startIndex >= recipeList.length) {
      setHasMore(false);
      setIsLoading(false);
      return;
    }

    const newRecipes = recipeList.slice(startIndex, endIndex);
    setDisplayedRecipes((prev) => [...prev, ...newRecipes]);
    setCurrentPage(nextPage);
    setIsLoading(false);
  }, [currentPage, isLoading, hasMore, recipeList, recipesPerPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !isLoading && hasMore) {
        loadMoreRecipes();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore, loadMoreRecipes]);

  const renderItems = (arr: any) => {
    const items = arr.map((item: any, i: number) => {
      return (
        <li key={`${item.id}-${i}`} className="cards__item">
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

  return (
    <>
      {renderItems(displayedRecipes)}
      {isLoading && <div className="loading">Loading...</div>}
      {!hasMore && displayedRecipes.length > 0 && <div className="no-more">You've reached the end</div>}
    </>
  );
};

export default CardItem;
