const TabContent = () => {
  return (
    <>
      <section className="tabcontent">
        <div className="tabcontent__header">
          <h4 className="tabcontent__title">Ingredients</h4>
          <div className="calc">
            <button id="decr-btn" className="calc__btn">
              -
            </button>
            <span className="calc__text">4 servings</span>
            <button id="incr-btn" className="calc__btn">
              +
            </button>
          </div>
        </div>
        <ul className="tabcontent__list">
          <li className="tabcontent__item">
            <h3 className="tabcontent__item-name">boneless chicken breasts</h3>
            <div className="tabcontent__item-info">
              <span className="tabcontent__item-info--bold">2 lbs</span>
              <span className="tabcontent__item-info--grey">900g</span>
            </div>
          </li>
          <li className="tabcontent__item">
            <h3 className="tabcontent__item-name">bell peppers</h3>
            <div className="tabcontent__item-info">
              <span className="tabcontent__item-info--bold">1 can (14oz)</span>
              <span className="tabcontent__item-info--grey">400g can</span>
            </div>
          </li>
          <li className="tabcontent__item">
            <h3 className="tabcontent__item-name">garlic cloves</h3>
            <div className="tabcontent__item-info">
              <span className="tabcontent__item-info--bold">4 cloves</span>
              <span className="tabcontent__item-info--grey">4 cloves</span>
            </div>
          </li>
        </ul>
      </section>

      <section className="tabcontent">
        <div className="tabcontent__header">
          <h4 className="tabcontent__title">Instructions</h4>
        </div>
        <p className="tabcontent__descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          impedit doloremque voluptatem officia. Consectetur, eaque nostrum?
          Deleniti eligendi quam distinctio placeat ullam totam, sequi assumenda
          vel adipisci mollitia in, consequatur eos magnam ex delectus esse
          incidunt quo similique praesentium aut consectetur, dicta fugiat!
        </p>
        <ol className="tabcontent__steps">
          <li className="tabcontent__step">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            ullam impedit, voluptas numquam vitae suscipit iste voluptates
            distinctio voluptate molestias?
          </li>
          <li className="tabcontent__step">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            ullam impedit, voluptas numquam vitae suscipit iste voluptates
            distinctio voluptate molestias?
          </li>
          <li className="tabcontent__step">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            ullam impedit, voluptas numquam vitae suscipit iste voluptates
            distinctio voluptate molestias?
          </li>
        </ol>
      </section>
    </>
  );
};

export default TabContent;
