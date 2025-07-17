import { Link } from "react-router-dom";

import FavBtn from "../FavBtn/FavBtn";

import "../CardItem/card-item.scss";

const CardItem = () => {
  return (
    <>
      <Link to="/recipe" className="cards__item">
        <div className="cards__header">
          <FavBtn />
        </div>
        <div className="cards__info">
          <h2 className="cards__title">Classic Margherita Pizza</h2>
          <div className="cards__footer">
            <span className="cards__time">25 min</span>
            <span className="cards__complexity" data-value="easy">
              Easy
            </span>
          </div>
        </div>
      </Link>

      <Link to="/recipe" className="cards__item">
        <div className="cards__header">
          <FavBtn />
        </div>
        <div className="cards__info">
          <h2 className="cards__title">Classic Margherita Pizza</h2>
          <p className="cards__descr">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, architecto!
          </p>
          <div className="cards__footer">
            <span className="cards__time">25 min</span>
            <span className="cards__complexity" data-value="hard">
              Hard
            </span>
          </div>
        </div>
      </Link>

      <Link to="/recipe" className="cards__item">
        <div className="cards__header">
          <FavBtn />
        </div>
        <div className="cards__info">
          <h2 className="cards__title">Classic Margherita Pizza</h2>
          <div className="cards__footer">
            <span className="cards__time">25 min</span>
            <span className="cards__complexity" data-value="medium">
              Medium
            </span>
          </div>
        </div>
      </Link>

      <Link to="/recipe" className="cards__item">
        <div className="cards__header">
          <FavBtn />
        </div>
        <div className="cards__info">
          <h2 className="cards__title">Classic Margherita Pizza</h2>
          <div className="cards__footer">
            <span className="cards__time">25 min</span>
            <span className="cards__complexity" data-value="easy">
              Easy
            </span>
          </div>
        </div>
      </Link>

      <Link to="/recipe" className="cards__item">
        <div className="cards__header">
          <FavBtn />
        </div>
        <div className="cards__info">
          <h2 className="cards__title">Classic Margherita Pizza</h2>
          <div className="cards__footer">
            <span className="cards__time">25 min</span>
            <span className="cards__complexity" data-value="hard">
              Hard
            </span>
          </div>
        </div>
      </Link>

      <Link to="/recipe" className="cards__item">
        <div className="cards__header">
          <FavBtn />
        </div>
        <div className="cards__info">
          <h2 className="cards__title">Classic Margherita Pizza</h2>
          <div className="cards__footer">
            <span className="cards__time">25 min</span>
            <span className="cards__complexity" data-value="medium">
              Medium
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardItem;
