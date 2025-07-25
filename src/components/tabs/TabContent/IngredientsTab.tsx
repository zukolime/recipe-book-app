import { useServings } from "../../../hooks/useServings";
import { formatIngredientAmount } from "../../../utils/formatIngredientAmount";

interface IngredientProps {
  name: string;
  baseAmount: string;
  unit: string;
}

const baseIngredients: IngredientProps[] = [
  { name: "boneless chicken breasts", baseAmount: "225", unit: "g" },
  { name: "boneless chicken breasts", baseAmount: "Handful", unit: "Handful" },
  { name: "bell peppers", baseAmount: "2", unit: "tbs" },
  { name: "garlic cloves", baseAmount: "1", unit: "clove" },
];

const IngredientsTab = () => {
  const { servings, increase, decrease } = useServings(4, 1);

  return (
    <>
      <div className="tabcontent__header">
        <h4 className="tabcontent__title">Ingredients</h4>
        <div className="calc">
          <button onClick={decrease} className="calc__btn">
            -
          </button>
          <span className="calc__text">{servings} servings</span>
          <button onClick={increase} className="calc__btn">
            +
          </button>
        </div>
      </div>

      <ul className="tabcontent__list">
        {baseIngredients.map((ingredient, index) => (
          <li key={index} className="tabcontent__item">
            <h3 className="tabcontent__item-name">{ingredient.name}</h3>
            <div className="tabcontent__item-info">
              {formatIngredientAmount(
                ingredient.baseAmount,
                servings,
                ingredient.unit
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientsTab;
