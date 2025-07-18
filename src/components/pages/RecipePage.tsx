import Banner from "../Banner/Banner";
import Tabs from "../tabs/TabsContainer/TabsContainer";
import FavBtn from "../FavBtn/FavBtn";

const RecipePage = () => {
  return (
    <>
      <Banner
        title="Mediterranean Chicken Skillet"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, architecto! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, architecto!"
        time="35"
        level="Medium"
        backgroundImg="banner__bg"
        backgroundColor="banner__inner"
      >
        <FavBtn />
      </Banner>

      <Tabs />
    </>
  );
};

export default RecipePage;
