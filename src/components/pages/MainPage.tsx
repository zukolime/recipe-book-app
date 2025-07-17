import Banner from "../Banner/Banner";
import SearchPanel from "../SearchPanel/SearchPanel";
import CardsList from "../CardsList/CardsList";

const MainPage = () => {
  return (
    <>
      <Banner title="Discover Recipes" />
      <SearchPanel placeholder="Search recipes..." />
      <CardsList />
    </>
  );
};

export default MainPage;
