import { useState } from "react";

interface IngredientProps {
  name: string;
  baseAmount: number;
  unit: string;
}

const baseIngredients: IngredientProps[] = [
  { name: "boneless chicken breasts", baseAmount: 225, unit: "g" },
  { name: "bell peppers", baseAmount: 100, unit: "g" },
  { name: "garlic cloves", baseAmount: 1, unit: "clove" },
];

const IngredientsTab = () => {
  const [servings, setServings] = useState(4);

  const calcByServings = (step: number) => {
    setServings((servings: number) => Math.max(1, servings + step));
  };

  const formatWeight = (grams: number): string => {
    if (grams >= 1000) {
      return `${(grams / 1000).toFixed(1)} kg`;
    }
    return `${grams} g`;
  };

  return (
    <>
      <div className="tabcontent__header">
        <h4 className="tabcontent__title">Ingredients</h4>
        <div className="calc">
          <button onClick={() => calcByServings(-1)} className="calc__btn">
            -
          </button>
          <span className="calc__text">{servings} servings</span>
          <button onClick={() => calcByServings(1)} className="calc__btn">
            +
          </button>
        </div>
      </div>

      <ul className="tabcontent__list">
        {baseIngredients.map((ingredient, index) => (
          <li key={index} className="tabcontent__item">
            <h3 className="tabcontent__item-name">{ingredient.name}</h3>
            <div className="tabcontent__item-info">
              {ingredient.unit === "g"
                ? formatWeight(ingredient.baseAmount * servings)
                : `${ingredient.baseAmount * servings} ${ingredient.unit}`}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientsTab;
