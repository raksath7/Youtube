import React from "react";
import { Link } from "react-router-dom";
import ChannelItems from "./ChannelItems";

const Channelnft = () => {
  return (
    <div className="channelNft">
      <div className="channelNftRoute">
        <div>Itmes</div>
        <div>Analytics</div>
        <div>Activity</div>
      </div>
      <div>
        <ChannelItems/>
      </div>
    </div>
  );
};

export default Channelnft;
