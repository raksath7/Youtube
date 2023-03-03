import React from "react";
import Card from "./Card";
import Nft from "./Nft";
import Search from "./Search";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div className="mainPage">
      <Search />
      <Card />
      <Nft />
    </div>
  );
};

export default MainPage;
