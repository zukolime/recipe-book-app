import IngredientsTab from "./IngredientsTab";
import InstructionsTab from "./InstructionsTab";

import "../TabContent/tab-content.scss";

const TabContent = ({
  activeTab,
}: {
  activeTab: "ingredients" | "instructions";
}) => {
  return (
    <>
      {activeTab === "ingredients" && (
        <section className="tabcontent tabcontent--active fade-in">
          <IngredientsTab />
        </section>
      )}

      {activeTab === "instructions" && (
        <section className="tabcontent tabcontent--active fade-in">
          <InstructionsTab />
        </section>
      )}
    </>
  );
};

export default TabContent;
