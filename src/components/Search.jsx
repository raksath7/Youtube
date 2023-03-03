import React from "react";
import "./Search.css";

import { CgSearch } from "react-icons/cg";
import { FaGripfire } from "react-icons/fa";
import { IoMusicalNotes } from "react-icons/io5";
import { MdSportsEsports } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "./Card";
import Nft from "./Nft";
const Cards = ({ open }) => {
  return (
    <div className={`cards ${open && "cardOpen"}`}>
      {/* search */}
      <div className="top">
        <div className="search">
          <CgSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Search item, collections ,and account"
          ></input>
        </div>
        <div className="mainLogin">
          <button className="MainAccount">web3</button>
          <div className="toggleUser">
            <p className="activeUser">user</p>
            <p>creator</p>
          </div>
          <div>
            <BsPersonCircle className="profile" />
          </div>
        </div>
      </div>
      {/*  Collectibles */}
      <div className="collect">
        <div className="collections">
          <div>Top Collections</div>
          <div>See all</div>
        </div>
        <div className="collectionsList">
          <p>
            <FaGripfire className="trendingIcon" />
            Trending
          </p>
          <p>
            <GiEarthAfricaEurope className="artsIcon" />
            Art
          </p>
          <p>
            <IoMusicalNotes className="musicIcon" />
            Music
          </p>
          <p>
            <MdSportsEsports className="sportsIcon" />
            e-Sports
          </p>
          <p>
            <FaCameraRetro className="photographyIcon" />
            Photograpgy
          </p>
        </div>
      </div>
      {/* nft */}
      {/* <div className="nft"> */}
      {/* <Card /> */}
      {/* </div> */}
      {/* <div className="nfts"> */}
      {/* <Nft /> */}
      {/* </div> */}
    </div>
  );
};

export default Cards;
