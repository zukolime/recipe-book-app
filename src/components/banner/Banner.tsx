import fav from "../../resources/icons/fav.svg";
import hourglass from "../../resources/icons/hourglass.svg";
import level from "../../resources/icons/level.svg";

import "../Banner/banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__bg">
          <button className="favorite favorite--big">
            <img className="favorite__icon" src={fav} alt="favorite" />
          </button>
          <div className="banner__inner">
            <h1 className="banner__title">Mediterranean Chicken Skillet</h1>
            <p className="banner__descr">
              A vibrant and flavorful one-pan Mediterranean chicken dish
              featuring tender chicken breast, colorful bell peppers, and a rich
              tomato-cream sauce. Perfect for weeknight dinners and packed with
              fresh herbs and aromatic spices.
            </p>
            <div className="banner__details">
              <div className="banner__detail">
                <div className="banner__icon">
                  <img src={hourglass} alt="hourglass icon" />
                </div>
                <span className="banner__detail-text">35 mins</span>
              </div>
              <div className="banner__detail">
                <div className="banner__icon">
                  <img src={level} alt="level icon" />
                </div>
                <span className="banner__detail-text">Easy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
