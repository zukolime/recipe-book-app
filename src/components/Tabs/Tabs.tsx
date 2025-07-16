import TabContent from "../TabContent/TabContent";

import "../Tabs/tabs.scss";

const Tabs = () => {
  return (
    <div className="container">
      <div className="tabcontainer">
        <div className="tabcontainer__header">
          <button className="tabcontainer__title tabcontainer__title--active">
            Ingredients
          </button>
          <button className="tabcontainer__title">Instructions</button>
        </div>
        <TabContent />
      </div>
    </div>
  );
};

export default Tabs;
