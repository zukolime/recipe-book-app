import { useState, useEffect } from 'react';

import useMealData from '../../services/getMealData';

const FiltersGroup = () => {
  const [buttons, setButtons] = useState<string[]>([]);

  const { getAllAreas } = useMealData();

  useEffect(() => {
    fetchFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchFilters = () => {
    getAllAreas().then(onFiltersLoaded).catch(onError);
  };

  const onFiltersLoaded = (areas: string[]) => {
    const areaFilters = Array.from(new Set(areas));
    setButtons(areaFilters);
  };

  const onError = () => {
    return (
      <span style={{ margin: '0.5rem', color: '#10b981' }}>
        Error fetching filters from server
      </span>
    );
  };

  const renderItems = (buttons: string[]) => {
    if (buttons.length === 0) {
      return (
        <span style={{ margin: '0.5rem', color: '#10b981' }}>
          There are no filters by kitchen
        </span>
      );
    }

    return buttons.map((filter) => (
      <button
        key={filter}
        className='search__filter'
      >
        {filter}
      </button>
    ));
  };

  const btns = renderItems(buttons);

  return (
    <div className='search__filters'>
      <button className='search__filter active'>All</button>
      {btns}
      <button className='search__filter'>Random!</button>
    </div>
  );
};

export default FiltersGroup;
