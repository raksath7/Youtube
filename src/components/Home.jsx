import React from "react";
import NavCard from "./NavCard";
import "./Home.css";
import Search from "./Search";
import Cards from "./Search";
import { BsSearch } from "react-icons/bs";
import Card from "./Card";
import Nft from "./Nft";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Channel from "./Channel";
const Home = () => {
  return (
    <div className="Home">
      <NavCard />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Channels" element={<Channel />} />
      </Routes>
      {/* <MainPage /> */}
    </div>
  );
};

export default Home;
