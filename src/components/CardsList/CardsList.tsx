import CardItem from "../CardItem/CardItem";

import "../CardsList/cards-list.scss";

const CardsList = () => {
  return (
    <section className="cards">
      <div className="container">
        <div className="cards__wrapper">
          <CardItem />
        </div>
      </div>
    </section>
  );
};

export default CardsList;
