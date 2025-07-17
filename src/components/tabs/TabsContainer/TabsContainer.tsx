import { useState } from "react";
import TabContent from "../TabContent/TabContent";

import "./tabs-container.scss";

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState<"ingredients" | "instructions">(
    "ingredients"
  );

  return (
    <div className="container">
      <div className="tabcontainer">
        <div className="tabcontainer__header">
          <button
            className={`tabcontainer__title ${
              activeTab === "ingredients" ? "tabcontainer__title--active" : ""
            }`}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          <button
            className={`tabcontainer__title ${
              activeTab === "instructions" ? "tabcontainer__title--active" : ""
            }`}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
        </div>
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default TabsContainer;
