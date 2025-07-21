import { useHttp } from "../hooks/http.hook";

const useMealData = () => {
  const { request } = useHttp();

  const _apiBase = "https://www.themealdb.com/api/json/v1/1/";

  const getAllRecipes = async () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (const letter of alphabet) {
      const res = await request(`${_apiBase}search.php?f=${letter}`);
      if (res.meals) {
        return res.meals.map(_transformRecipes);
      }
    }
  };

  const _transformRecipes = (recipe: any) => {
    const ingredients: string[] = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(ingredient.trim());
      }
    }

    return {
      id: recipe.idMeal,
      name: recipe.strMeal,
      instruction: recipe.strInstructions,
      thumbnail: recipe.strMealThumb,
      measure: recipe.strMeasure1.replace(/\w/, ""),
      unit: recipe.strMeasure1.replace(/\d/, ""),
      ingredients,
    };
  };

  return { getAllRecipes };
};

export default useMealData;
