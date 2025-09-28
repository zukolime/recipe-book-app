import { useState, useEffect } from 'react';

import useMealData from '../../services/getMealData';

import { Recipe } from '../../types/recipe';

const FiltersGroup = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const { getAllAreas } = useMealData();

  useEffect(() => {
    fetchFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchFilters = () => {
    getAllAreas().then(onFiltersLoaded);
  };

  const onFiltersLoaded = (areas: string[]) => {
    const areaFilters = Array.from(new Set(areas));
    setFilters(areaFilters);
  };

  const renderItems = () => {
    return filters.map((filter) => (
      <button
        key={filter}
        className='search__filter'
      >
        {filter}
      </button>
    ));
  };

  const btn = renderItems();

  return (
    <div className='search__filters'>
      <button className='search__filter active'>All</button>
      {btn}
      <button className='search__filter'>Random!</button>
    </div>
  );
};

export default FiltersGroup;
