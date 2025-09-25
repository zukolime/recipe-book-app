import FiltersGroup from '../filtersGroup/FiltersGroup';

import '../SearchPanel/search-panel.scss';

// interface SearchPanelProps {
//   placeholder: string;
// }

const SearchPanel = ({ placeholder }: { placeholder: string }) => {
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
            />
            <button className='search__btn'>Go!</button>
          </div>
          <FiltersGroup></FiltersGroup>
        </div>
      </div>
    </section>
  );
};

export default SearchPanel;
