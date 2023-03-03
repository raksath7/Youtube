import React from "react";
import "./Channel.css";
import { MdVerified } from "react-icons/md";
import { BiStar } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
// import Poly from "../assects/polygon";

// import {polygon} from "../assects/Polygon"
import polygon from "../assects/polygon.png";
import Channelnft from "./Channelnft";
const Channel = () => {
  return (
    <div className="channel">
      <div
        className="ch-header"
        style={{
          backgroundImage:
            'url("https://airnfts.s3.amazonaws.com/nft-images/20210908/DEM_HD__1631067577620.jpg")',
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="ch-logo">
          <img
            src="https://airnfts.s3.amazonaws.com/nft-images/20210908/DEM_HD__1631067577620.jpg"
            alt=""
          ></img>
        </div>
      </div>
      <div className="ch-details-content">
        {/* detail name */}
        <div className="ch-details">
          <div className="ch-detail-name">
            CHANNEL NAME
            <MdVerified className="ch-verified " />
          </div>
          <div className="ch-icons">
            <div className="youtube">
              <IoLogoYoutube className="ch-detail-icon " />
            </div>
            <div className="insta">
              <AiFillInstagram className="ch-detail-icon " />
            </div>
            <div className="wishlist">
              <BiStar className="ch-detail-icon" />
            </div>
            <div className="share">
              <FaShareAlt className="ch-detail-icon " />
            </div>
          </div>
        </div>
        {/* detail contents */}
        <div className="ch-nft-detail">
          <div>
            <p>Item</p>
            <h4>items.</h4>
          </div>
          <div>
            <p>Created</p>
            <h4>created </h4>
          </div>
          <div>
            <p>Creatot Earnings</p>
            <h4>Creatot Earnings</h4>
          </div>
          <div>
            <p>Chain</p>
            {/* <h4>POLYGON</h4> */}
            <img src={polygon} alt="" className="polygon"></img>
          </div>
          <div>
            <p>Category</p>
            <h4>art</h4>
          </div>
        </div>
        {/* discription */}
        <div>
          <p className="ch-description-showless">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            debitis maxime itaque quam a iste quis reprehenderit commodi est?
            Nobis repellat voluptatibus laboriosam. Error quasi laborum
            consequatur sint inventore? Dolor?
          </p>
        </div>
    </div>
    <Channelnft/>
    </div>
  );
};

export default Channel;
