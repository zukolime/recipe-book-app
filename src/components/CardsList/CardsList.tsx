import { useEffect, useState, useRef } from 'react';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

import CardItem from '../CardItem/CardItem';
import Spinner from '../Spinner/Spinner';
import { ErrorMsg } from '../ErrorMsg/ErrorMsg';
import useMealData from '../../services/getMealData';

import { Recipe } from '../../types/recipe';

import '../CardsList/cards-list.scss';

const CardsList = () => {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const { getAllRecipes } = useMealData();
  const limit = 6;

  useEffect(() => {
    fetchRecipes(offset, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useInfiniteScroll(loadMore, ref);

  const fetchRecipes = (offset: number, initial: boolean) => {
    initial ? setLoading(true) : setLoading(false);
    getAllRecipes(offset).then(newItemsLoading).catch(onError);
  };

  const newItemsLoading = (newItems: Recipe[]) => {
    setRecipeList((prev) => [...prev, ...newItems]);
    setHasMore(newItems.length === limit);
    setOffset((prev) => prev + limit);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  function loadMore() {
    if (!loading && hasMore) {
      fetchRecipes(offset, false);
    }
  }

  const renderItems = recipeList.map((recipe) => (
    <CardItem
      key={recipe.id}
      {...recipe}
    />
  ));

  const endMsg =
    hasMore && !error ? (
      <Spinner />
    ) : (
      <span style={{ display: 'block', textAlign: 'center', margin: '2rem 0' }}>
        That's all, my folks!
      </span>
    );
  const spinner = loading && !endMsg ? <Spinner /> : null;
  const errorMsg = error ? <ErrorMsg /> : null;
  const content = !(loading || error) ? (
    <ul className='cards__wrapper'>{renderItems}</ul>
  ) : null;

  return (
    <section className='cards'>
      <div className='container'>
        {spinner}
        {errorMsg}
        {content}
        {endMsg}
        <div ref={ref}></div>
      </div>
    </section>
  );
};

export default CardsList;
