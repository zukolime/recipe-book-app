import CardItem from "../CardItem/CardItem";

import "../CardsList/cards-list.scss";

const CardsList = () => {
  return (
    <section className="cards">
      <div className="container">
        <ul className="cards__wrapper">
          <CardItem />
        </ul>
      </div>
    </section>
  );
};

export default CardsList;
