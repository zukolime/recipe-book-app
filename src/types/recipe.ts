export interface Recipe {
  id: number;
  thumbnail: string;
  name: string;
  area: string;
  difficulty: string;
  ingredients: string[];
  measures: string[];
  cookingTime: string;
  instructions: string[];
}
