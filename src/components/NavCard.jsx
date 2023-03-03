import React, { useState, createContext, useEffect } from "react";
import { FaGoogleWallet } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { RiAppsFill } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";
import { GiWallet } from "react-icons/gi";
import { IoMdWallet } from "react-icons/io";
import { TbChartInfographic } from "react-icons/tb";
import { RiToggleFill } from "react-icons/ri";
import { BsMoon } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import "./NavCard.css";
import Cards from "./Search";
import { useNavigate } from "react-router-dom";
export const BookHoldContext = createContext();

const NavCard = () => {
  const nav = useNavigate();
  const [navcardOpen, setNavcardOpen] = useState(false);
  const [padding, setPadding] = useState("padding");
  const [padding1, setPadding1] = useState("paddingClosed");
  const [padding2, setPadding2] = useState("paddingClosed");
  const [padding3, setPadding3] = useState("paddingClosed");
  const [padding4, setPadding4] = useState("paddingClosed");
  const [padding5, setPadding5] = useState("paddingClosed");
  const [padding6, setPadding6] = useState("paddingClosed");
  const [padding7, setPadding7] = useState("paddingClosed");
  const [padding8, setPadding8] = useState("paddingClosed");
  const [icon, setIcon] = useState("");
  const [icon1, setIcon1] = useState("");
  const [icon2, setIcon2] = useState("");
  const [icon3, setIcon3] = useState("");
  const [icon4, setIcon4] = useState("");
  const [icon5, setIcon5] = useState("");
  const [icon6, setIcon6] = useState("");
  const [icon7, setIcon7] = useState("");
  const [icon8, setIcon8] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (navcardOpen === true) {
      setTimeout(() => {
        setShow(true);
      }, 200);
    } else {
      setShow(false);
    }
  }, [navcardOpen]);
  //////////padding/////////
  const pad = () => {
    setPadding("padding");
    setPadding1("paddingClosed");
    setPadding2("paddingClosed");
    setPadding3("paddingClosed");
    setPadding4("paddingClosed");
    setPadding5("paddingClosed");
    setPadding6("paddingClosed");
    setPadding7("paddingClosed");
    setPadding8("paddingClosed");
    nav("/");
  };
  const pad1 = () => {
    setPadding("paddingClosed");
    setPadding1("padding");
    setPadding2("paddingClosed");
    setPadding3("paddingClosed");
    setPadding4("paddingClosed");
    setPadding5("paddingClosed");
    setPadding6("paddingClosed");
    setPadding7("paddingClosed");
    setPadding8("paddingClosed");
  };
  const pad2 = () => {
    setPadding("paddingClosed");
    setPadding1("paddingClosed");
    setPadding2("padding");
    setPadding3("paddingClosed");
    setPadding4("paddingClosed");
    setPadding5("paddingClosed");
    setPadding6("paddingClosed");
    setPadding7("paddingClosed");
    setPadding8("paddingClosed");
  };
  const pad3 = () => {
    setPadding("paddingClosed");
    setPadding2("paddingClosed");
    setPadding1("paddingClosed");
    setPadding3("padding");
    setPadding4("paddingClosed");
    setPadding5("paddingClosed");
    setPadding6("paddingClosed");
    setPadding7("paddingClosed");
    setPadding8("paddingClosed");
  };
  const pad4 = () => {
    setPadding("paddingClosed");
    setPadding2("paddingClosed");
    setPadding3("paddingClosed");
    setPadding1("paddingClosed");
    setPadding4("padding");
    setPadding5("paddingClosed");
    setPadding6("paddingClosed");
    setPadding7("paddingClosed");
    setPadding8("paddingClosed");
  };
  const pad5 = () => {
    setPadding("paddingClosed");
    setPadding5("padding");
    setPadding2("paddingClosed");
    setPadding3("paddingClosed");
    setPadding4("paddingClosed");
    setPadding1("paddingClosed");
    setPadding6("paddingClosed");
    setPadding7("paddingClosed");
    setPadding8("paddingClosed");
  };
  const pad6 = () => {
    setPadding("paddingClosed");
    setPadding6("padding");
    setPadding2("paddingClosed");
    setPadding3("paddingClosed");
    setPadding4("paddingClosed");
    setPadding5("paddingClosed");
    setPadding1("paddingClosed");
    setPadding7("paddingClosed");
    setPadding8("paddingClosed");
  };
  const pad7 = () => {
    setPadding("paddingClosed");
    setPadding8("paddingClosed");
    setPadding7("padding");
    setPadding2("paddingClosed");
    setPadding3("paddingClosed");
    setPadding4("paddingClosed");
    setPadding5("paddingClosed");
    setPadding6("paddingClosed");
    setPadding1("paddingClosed");
  };
  const pad8 = () => {
    setPadding("paddingClosed");
    setPadding7("paddingClosed");
    setPadding8("padding");
    setPadding2("paddingClosed");
    setPadding3("paddingClosed");
    setPadding4("paddingClosed");
    setPadding5("paddingClosed");
    setPadding6("paddingClosed");
    setPadding1("paddingClosed");
    nav("/channels");
  };
  /////////icon/////////////
  return (
    <>
      <div
        className={`navcard ${navcardOpen && "navcardOpen"}`}
        onMouseEnter={() => setNavcardOpen(true)}
        onMouseLeave={() => setNavcardOpen(false)}
      >
        <div className="Logo">
          <h2 className="appLogo">
            <FaGoogleWallet className="logoIcon" />
            {show === true && "DTWIN"}
          </h2>
        </div>
        <div className="contents">
          <div className={`${padding}`} onClick={pad}>
            {/* <div className="contentIcon"> */}
            <BsCurrencyDollar className="cicon" />
            {/* </div> */}
            {show === true && "MarketPlace"}
          </div>
        </div>
        <div className="contents">
          <div className={`${padding8}`} onClick={pad8}>
            {/* <div className="contentIcon"> */}
            <MdSpaceDashboard className="cicon" />
            {/* </div> */}
            {show === true && "DashBoard"}
          </div>
        </div>
        <div className="contents">
          {/* try */}
          <div className={`${padding1}`} onClick={pad1}>
            {/* <div className="contentIcon"> */}
            <MdMail className="cicon" />
            {/* </div> */}
            {show === true && "Messages"}
          </div>
          {/* try */}
          {/* <div className={`${padding2}`}>
            <MdMail className="cicon" />
            {show && "Messages"}
          </div> */}
        </div>

        <div className="division">PROFILE</div>
        <div className="contents">
          <div className={`${padding2}`} onClick={pad2}>
            <GiWallet className="cicon" />
            {show && "My Collections"}
          </div>
        </div>
        <div className="contents">
          <div className={`${padding3}`} onClick={pad3}>
            <IoMdWallet className="cicon" />
            {show && "My Wallet"}
          </div>
        </div>
        <div className="contents">
          <div className={`${padding4}`} onClick={pad4}>
            <TbChartInfographic className="cicon" />
            {show && "History"}
          </div>
        </div>
        <div className="contents">
          <div className={`${padding5}`} onClick={pad5}>
            <IoMdSettings className="cicon" />
            {show && "Setting"}
          </div>
        </div>
        <div className="division">OTHERS</div>
        <div className="contents">
          <div className={`${padding6}`} onClick={pad6}>
            <TbChartInfographic className="cicon" />
            {show && "Resources"}
          </div>
        </div>
        <div className="contents">
          <div className={`${padding7}`} onClick={pad7}>
            <RiToggleFill className="cicon" />
            {show && "Light Mode"}
            {/* {show && <div className="colorToggle">
                <div className="toggleSun">
                  <BsFillSunFill />
                </div>
                <div className="toggleMoon">
                  <BsMoon />
                </div>
              </div>} */}
          </div>
        </div>
      </div>
      {/* contents */}
      {/* <Cards open={navcardOpen} /> */}
    </>
  );
};

export default NavCard;
