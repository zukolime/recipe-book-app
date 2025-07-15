import fav from "../../resources/icons/fav.svg";
import clock from "../../resources/icons/time.svg";
import complexity from "../../resources/icons/complexity.svg";

const Banner = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info__bg">
          <button className="favorite favorite--big">
            <img className="favorite__icon" src={fav} alt="favorite" />
          </button>
          <div className="info__inner">
            <h1 className="info__title">Mediterranean Chicken Skillet</h1>
            <p className="info__descr">
              A vibrant and flavorful one-pan Mediterranean chicken dish
              featuring tender chicken breast, colorful bell peppers, and a rich
              tomato-cream sauce. Perfect for weeknight dinners and packed with
              fresh herbs and aromatic spices.
            </p>
            <div className="info__details">
              <div className="info__detail">
                <img src={clock} alt="hours-icon" />
                <div className="info__detail-text">35 mins</div>
              </div>
              <div className="info__detail">
                <img src={complexity} alt="complexity-icon" />
                <div className="info__detail-text">Easy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
