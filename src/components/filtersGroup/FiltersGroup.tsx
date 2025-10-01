import { useState, useEffect } from 'react';
import { useFilter } from '../../context/FilterContext';

import useMealData from '../../services/getMealData';

const FiltersGroup = () => {
  const [buttons, setButtons] = useState<string[]>([]);

  const { activeFilter, setActiveFilter, setTriggerRandom } = useFilter();
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
    setButtons(['All', ...areaFilters, 'Random']);
  };

  const handleFilterChange = (filter: string) => {
    if (filter === 'Random' && activeFilter === 'Random') {
      setActiveFilter('Random');
      setTriggerRandom((prev) => !prev);
    } else {
      setActiveFilter(filter);
    }
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

  return <div className='search__filters'>{btns}</div>;
};

export default FiltersGroup;
