import { useState } from "react";

export const useServings = (initial = 1, min = 1, max?: number) => {
  const [servings, setServings] = useState(initial);

  const update = (step: number) => {
    setServings((prev) => {
      let next = prev + step;

      if (next < min) next = min;
      if (max !== undefined && next > max) next = max;

      return next === prev ? prev : next;
    });
  };

  return {
    servings,
    increase: () => update(1),
    decrease: () => update(-1),
    setServings,
  };
};
