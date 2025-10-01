import { useHttp } from '../hooks/http.hook';
import { shuffleArray } from '../utils/shuffleArray';

import { Recipe } from '../types/recipe';

const useMealData = () => {
  const { request } = useHttp();

  const _apiBase = 'https://recipes-api-zuko.vercel.app/api/recipes';
  const _baseOffset = 0;

  const getAllRecipes = async (
    offset = _baseOffset,
    limit = 6,
    area = 'All'
  ) => {
    try {
      let recipes: Recipe[] = [];

      const res = await request(
        `${_apiBase}?area=${area}&offset=${offset}&limit=${limit}`
      );

      if (res) {
        recipes = [...recipes, ...res.map(_transformRecipes)];
      }

      return shuffleArray(recipes);
    } catch (e: any) {
      console.log(e);
      throw new Error(e.message);
    }
  };

  const getRecipeByName = async (name: string) => {
    const res = await request(`${_apiBase}?name=${name}`);
    return res.map(_transformRecipes);
  };

  const getAllAreas = async () => {
    let areas: string[] = [];

    const res = await request(_apiBase);
    if (res) {
      areas = res.map((data: Recipe) => data.area);
    }

    return areas;
  };

  const _transformRecipes = (recipe: Recipe) => {
    const ingredients: string[] = [];
    const measures: string[] = [];
    const instructions: string[] = [];

    return {
      id: recipe.id,
      thumbnail: recipe.thumbnail,
      name: recipe.name,
      area: recipe.area,
      difficulty: recipe.difficulty,
      cookingTime: recipe.cookingTime,
      instructions,
      measures,
      ingredients,
    };
  };

  return { getAllRecipes, getAllAreas, getRecipeByName };
};

export default useMealData;
