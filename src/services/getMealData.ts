import { useHttp } from '../hooks/http.hook';
import { shuffleArray } from '../utils/shuffleArray';

import { Recipe } from '../types/recipe';

const useMealData = () => {
  const { request } = useHttp();

  const _apiBase = 'https://recipes-api-vercel.vercel.app/api';
  const _baseOffset = 0;

  const getAllRecipes = async (offset = _baseOffset, limit = 6) => {
    try {
      let recipes: Recipe[] = [];

      const res = await request(`${_apiBase}?offset=${offset}&limit=${limit}`);

      if (res) {
        recipes = [...recipes, ...res.data.map(_transformRecipes)];
      }

      return shuffleArray(recipes);
    } catch (e: any) {
      console.log(e);
      throw new Error(e.message);
    }
  };

  const getAllAreas = async () => {
    let areas: string[] = [];

    const res = await request(_apiBase);
    if (res) {
      areas = res.data.map((data: Recipe) => data.area);
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

  return { getAllRecipes, getAllAreas };
};

export default useMealData;
