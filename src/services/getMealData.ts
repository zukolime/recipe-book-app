import { useHttp } from "../hooks/http.hook";

const useMealData = () => {
  const { request } = useHttp();

  const _apiBase = "https://www.themealdb.com/api/json/v1/1/";

  const getAllRecipes = async () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

    let recipes: any[] = [];

    for (const letter of alphabet) {
      const res = await request(`${_apiBase}search.php?f=${letter}`);
      if (res.meals) {
        recipes = [...recipes, ...res.meals.map(_transformRecipes)];
      }
    }

    return recipes;
  };

  const _transformRecipes = (recipe: any) => {
    const ingredients: string[] = [];
    const measures: string[] = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(ingredient.trim());
      }
    }

    for (let i = 1; i <= 20; i++) {
      const measure = recipe[`strMeasure${i}`];
      if (measure && measure.trim() !== "") {
        measures.push(measure.trim());
      }
    }

    return {
      id: recipe.idMeal,
      name: recipe.strMeal,
      instruction: recipe.strInstructions,
      thumbnail: recipe.strMealThumb,
      measures,
      ingredients,
    };
  };

  return { getAllRecipes };
};

export default useMealData;
