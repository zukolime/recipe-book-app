import { useState, useEffect } from 'react';

import useMealData from '../../services/getMealData';

const FiltersGroup = () => {
  const [buttons, setButtons] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');

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
    setButtons(areaFilters);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const renderItems = (items: string[]) => {
    if (items.length === 0) {
      return (
        <span style={{ margin: '0.5rem', color: '#10b981' }}>
          There are no filters by kitchen
        </span>
      );
    }

    return items.map((filter) => (
      <button
        key={filter}
        className={`search__filter ${activeFilter === filter ? 'active' : ''}`}
        onClick={() => handleFilterChange(filter)}
      >
        {filter}
      </button>
    ));
  };

  const btns = renderItems(buttons);

  return (
    <div className='search__filters'>
      <button
        className={`search__filter ${activeFilter === 'All' ? 'active' : ''}`}
        onClick={() => handleFilterChange('All')}
      >
        All
      </button>
      {btns}
      <button
        className={`search__filter ${
          activeFilter === 'Random' ? 'active' : ''
        }`}
        onClick={() => handleFilterChange('Random')}
      >
        Random!
      </button>
    </div>
  );
};

export default FiltersGroup;
