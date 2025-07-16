import React from "react";

import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import SearchPanel from "../SearchPanel/SearchPanel";
import CardsList from "../CardsList/CardsList";
import Seporator from "../Seporator/Seporator";
import Tabs from "../Tabs/Tabs";

import "../../styles/main.scss";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Banner />
        <SearchPanel />
        <CardsList />
        <Seporator />
        <Tabs />
      </div>
    </>
  );
}

export default App;
