import { useHttp } from '../hooks/http.hook';
import { shuffleArray } from '../utils/shuffleArray';

const useMealData = () => {
  const { request } = useHttp();

  const _apiBase = 'https://recipes-api-vercel.vercel.app/api';
  const _baseOffset = 0;
  const limit = 6;

  const getAllRecipes = async (offset = _baseOffset) => {
    try {
      let recipes: any[] = [];

      const res = await request(`${_apiBase}?offset=${offset}&limit=${limit}`);

      if (res) {
        recipes = [...res.data];
      }

      return shuffleArray(recipes);
    } catch (e: any) {
      console.log(e);
      throw new Error(e.message);
    }
  };

  // const _transformRecipes = (recipe: any) => {
  //   const ingredients: string[] = [];
  //   const measures: string[] = [];

  //   return {
  //     id: recipe.idMeal,
  //     name: recipe.strMeal,
  //     instruction: recipe.strInstructions,
  //     thumbnail: recipe.strMealThumb,
  //     area: recipe.strArea,
  //     measures,
  //     ingredients,
  //   };
  // };

  return { getAllRecipes };
};

export default useMealData;
