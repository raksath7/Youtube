import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import polygon from "../assects/polygon.png";
const ChannelItems = () => {
  const [show, setShow] = useState("none");
  const [status, setStatus] = useState(false);

  return (
    <div className="channelItems">
      <div className="channelItmesNav">
        <div className="channel-search">
          <IoSearch />
          <input type="text" placeholder="Search by name or atrribute"></input>
        </div>
        <div className="channel-select">
          {/* <div onClick={() => setShow()} className="channel-select-first"> */}
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          {/* </div> */}
          {/* <div className="channel-options">
            <div>sdsd</div>
            <div>sdsd</div>
          </div> */}
        </div>
        <BsThreeDotsVertical onClick={() => setStatus(!status)} />
      </div>
      <div className={`${status && `channel-buy`}`}>
        <div className="channel-select-nfts">
          <div className="channel-select-nfts-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkY3-jQelBm0NOiXtto_qo6NGtHhrQLPXPQ&usqp=CAU"
              alt=""
            ></img>
            <div className="channel-card-p">
              <p>name</p>
              <h3>809</h3>
            </div>

            <div className="channel-card-buy">
              <div className="channel-card-name">Buy</div>
              <div className="channel-card-cart">
                <TiShoppingCart className="channel-card-cart-icon" />
              </div>
            </div>
          </div>
          <div className="channel-select-nfts-card">
            <img
              src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/15/1523546512-ian-mckellen-almost-didnt-star-in-the-lord-of-the-rings-or-x-men-movies-because-of-mission-impossible.jpg"
              alt=""
            ></img>
            <div className="channel-card-p">
              <p>ace</p>
              <h3>460</h3>
            </div>

            <div className="channel-card-buy">
              <div className="channel-card-name">Buy</div>
              <div className="channel-card-cart">
                <TiShoppingCart className="channel-card-cart-icon" />
              </div>
            </div>
          </div>
          <div className="channel-select-nfts-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkY3-jQelBm0NOiXtto_qo6NGtHhrQLPXPQ&usqp=CAU"
              alt=""
            ></img>
            <div className="channel-card-p">
              <p>blackgod</p>
              <h3>230</h3>
            </div>

            <div className="channel-card-buy">
              <div className="channel-card-name">Buy</div>
              <div className="channel-card-cart">
                <TiShoppingCart className="channel-card-cart-icon" />
              </div>
            </div>
          </div>
          <div className="channel-select-nfts-card">
            <img
              src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/15/1523546512-ian-mckellen-almost-didnt-star-in-the-lord-of-the-rings-or-x-men-movies-because-of-mission-impossible.jpg"
              alt=""
            ></img>
            <div className="channel-card-p">
              <p>zoro</p>
              <h3>140</h3>
            </div>
            <div className="channel-card-buy">
              <div className="channel-card-name">Buy</div>
              <div className="channel-card-cart">
                <TiShoppingCart className="channel-card-cart-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className={` ${status ? `channel-status` : `status-show`}`}>
          <h4>Status</h4>
          <div>Buy</div>
          <div>Auciton</div>
          <div>New</div>
          <h4>Price</h4>
          <div>
            <input type="text" placeholder="min"></input>
          </div>

          <p>to</p>
          <div>
            <input typeof="text" placeholder="max"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelItems;
