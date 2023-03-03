import React from 'react'
import { MdVerified } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const Card = () => {
 return (
   <>
     <div className="card">
       <img
         className="cardImage"
         src="https://airnfts.s3.amazonaws.com/nft-images/20210527/HD_ART_01_1622078847733.jpg"
         alt=""
       ></img>
       <p className="cardName">
         Madhan Gowri
         {/* <span> */}
         <MdVerified className="verified" />
         {/* </span> */}
       </p>
       <h5>Geo Runners #100</h5>
       <div className="bits">
         <p>Current bit</p>
         <div className="bitsAmount">
           <FaRupeeSign className="bitsIcon" />
           <p>344</p>
         </div>
       </div>
     </div>
     <div className="card">
       <img
         className="cardImage"
         src="https://www.pixelstalk.net/wp-content/uploads/images6/NFT-HD-Wallpaper-Robot.jpg"
         alt=""
       ></img>
       <p className="cardName">
         Madhan OP
         {/* <span> */}
         <MdVerified className="verified" />
         {/* </span> */}
       </p>
       <h5>Gaming Run #50</h5>
     </div>
     <div className="card">
       <img
         className="cardImage"
         src="https://www.pixelstalk.net/wp-content/uploads/images6/NFT-HD-Wallpaper-Robot.jpg"
         alt=""
       ></img>
       <p className="cardName">
         Madhan OP
         {/* <span> */}
         <MdVerified className="verified" />
         {/* </span> */}
       </p>
       <h4>Gaming Run #50</h4>
     </div>
     <div className="card">
       <img
         className="cardImage"
         src="https://www.pixelstalk.net/wp-content/uploads/images6/NFT-HD-Wallpaper-Robot.jpg"
         alt=""
       ></img>
       <p className="cardName">
         Madhan OP
         {/* <span> */}
         <MdVerified className="verified" />
         {/* </span> */}
       </p>
       <h4>Gaming Run #50</h4>
     </div>
   </>
 );
}

export default Card