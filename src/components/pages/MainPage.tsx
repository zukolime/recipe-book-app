import Banner from "../Banner/Banner";
import SearchPanel from "../SearchPanel/SearchPanel";
import CardsList from "../CardsList/CardsList";

const MainPage = () => {
  return (
    <>
      <Banner title="Discover Recipes" />
      <SearchPanel />
      <CardsList />
    </>
  );
};

export default MainPage;
