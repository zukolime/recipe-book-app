import fav from "../../resources/icons/fav.svg";

import "../CardItem/card-item.scss";

const CardItem = () => {
  return (
    <>
      <a href="/recipe-page.html" className="cards__item">
        <div className="cards__header">
          <button className="favorite">
            <img className="cards__icon" src={fav} alt="favorite" />
          </button>
        </div>
        <div className="cards__info">
          <h2 className="cards__title">Classic Margherita Pizza</h2>
          <div className="cards__footer">
            <span className="cards__time">25 min</span>
            <span
              className="cards__complexity"
              // value="easy"
            >
              Easy
            </span>
          </div>
        </div>
      </a>

      <a href="/recipe-page.html" className="cards__item">
        <div className="cards__header">
          <button className="favorite">
            <img className="cards__icon" src={fav} alt="favorite" />
          </button>
        </div>
        <div className="cards__info">
          <h2 className="cards__title">Classic Margherita Pizza</h2>
          <div className="cards__footer">
            <span className="cards__time">25 min</span>
            <span
              className="cards__complexity"
              // value="hard"
            >
              Hard
            </span>
          </div>
        </div>
      </a>

      <a href="/recipe-page.html" className="cards__item">
        <div className="cards__header">
          <button className="favorite">
            <img className="favorite__icon" src={fav} alt="favorite" />
          </button>
        </div>
        <div className="cards__info">
          <h2 className="cards__title">Classic Margherita Pizza</h2>
          <div className="cards__footer">
            <span className="cards__time">25 min</span>
            <span
              className="cards__complexity"
              // value="medium"
            >
              Medium
            </span>
          </div>
        </div>
      </a>

      <a href="/recipe-page.html" className="cards__item">
        <div className="cards__header">
          <button className="favorite">
            <img className="cards__icon" src={fav} alt="favorite" />
          </button>
        </div>
        <div className="cards__info">
          <h2 className="cards__title">Classic Margherita Pizza</h2>
          <div className="cards__footer">
            <span className="cards__time">25 min</span>
            <span
              className="cards__complexity"
              // value="easy"
            >
              Easy
            </span>
          </div>
        </div>
      </a>

      <a href="/recipe-page.html" className="cards__item">
        <div className="cards__header">
          <button className="favorite">
            <img className="cards__icon" src={fav} alt="favorite" />
          </button>
        </div>
        <div className="cards__info">
          <h2 className="cards__title">Classic Margherita Pizza</h2>
          <div className="cards__footer">
            <span className="cards__time">25 min</span>
            <span
              className="cards__complexity"
              // value="hard"
            >
              Hard
            </span>
          </div>
        </div>
      </a>

      <a href="/recipe-page.html" className="cards__item">
        <div className="cards__header">
          <button className="favorite">
            <img className="cards__icon" src={fav} alt="favorite" />
          </button>
        </div>
        <div className="cards__info">
          <h2 className="cards__title">Classic Margherita Pizza</h2>
          <div className="cards__footer">
            <span className="cards__time">25 min</span>
            <span
              className="cards__complexity"
              // value="medium"
            >
              Medium
            </span>
          </div>
        </div>
      </a>
    </>
  );
};

export default CardItem;
