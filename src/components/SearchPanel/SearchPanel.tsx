import { useState } from 'react';
import { useFilter } from '../../context/FilterContext';
import FiltersGroup from '../filtersGroup/FiltersGroup';
import '../SearchPanel/search-panel.scss';

const SearchPanel = ({ placeholder }: { placeholder: string }) => {
  const { setSearchQuery } = useFilter();
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setSearchQuery(e.target.value);
  };

  const onSearchClick = () => {
    setSearchQuery(inputValue);
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchQuery(inputValue);
    }
  };

  return (
    <section className='search'>
      <div className='container'>
        <div className='search__inner'>
          <div className='search__input-box'>
            <input
              id='search__input'
              className='search__input'
              type='search'
              placeholder={placeholder}
              value={inputValue}
              onChange={onInputChange}
              onKeyDown={onEnterPress}
            />
            <button
              className='search__btn'
              onClick={onSearchClick}
            >
              Go!
            </button>
          </div>
          <FiltersGroup />
        </div>
      </div>
    </section>
  );
};

export default SearchPanel;
