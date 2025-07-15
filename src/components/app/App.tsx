import React from "react";
import Header from "../header/Header";
import Banner from "../banner/Banner";

import "../../styles/main.scss";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Banner />
      </div>
    </>
  );
}

export default App;
