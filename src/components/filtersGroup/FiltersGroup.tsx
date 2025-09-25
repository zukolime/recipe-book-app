const FiltersGroup = () => {
  return (
    <div className='search__filters'>
      <button className='search__filter active'>All</button>
      <button className='search__filter'>Italian</button>
      <button className='search__filter'>Asian</button>
      <button className='search__filter'>Healthy</button>
      <button className='search__filter'>Dessert</button>
      <button className='search__filter'>Mexican</button>
      <button className='search__filter'>French</button>
      <button className='search__filter'>Greek</button>
      <button className='search__filter'>Random!</button>
    </div>
  );
};

export default FiltersGroup;
