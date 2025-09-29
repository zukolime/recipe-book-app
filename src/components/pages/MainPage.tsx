import Banner from '../Banner/Banner';
import SearchPanel from '../SearchPanel/SearchPanel';
import CardsList from '../CardsList/CardsList';

import { FilterProvider } from '../../context/FilterContext';

const MainPage = () => {
  return (
    <FilterProvider>
      <Banner title='Discover Recipes' />
      <SearchPanel placeholder='Search recipes...' />
      <CardsList />
    </FilterProvider>
  );
};

export default MainPage;
