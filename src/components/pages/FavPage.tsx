import Banner from "../Banner/Banner";
import SearchPanel from "../SearchPanel/SearchPanel";
import CardsList from "../CardsList/CardsList";

const FavPage = () => {
  return (
    <>
      <Banner
        title="My Favorite Recipes"
        description="A curated collection of my most loved dishes, perfect for any occasion"
        backgroundColor="banner__inner banner__inner--fav-page"
      />
      <SearchPanel placeholder="Search my favorite recipes..." />
      {/* <CardsList />  */}
    </>
  );
};

export default FavPage;
