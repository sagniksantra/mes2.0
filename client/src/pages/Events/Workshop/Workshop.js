import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Landing from "../../Landing/Landing";
import mes from "./../../../assets/LogoFinal.png";
import { Link } from "react-router-dom";
import Speakers from "../../../components/Speakers/Speakers";


const Workshop = () => {
  return (
    <>
    <div className="speaker">
        {/* <Navbar/> */}
        <div className="gradient-wrapper">
            <div className="content-wrapper">
                <Navbar />
                <div className="description">
                    <div className="mes-logo">
                        <img src={mes} alt="MES Logo"/>
                    </div>
                    <h1>Workshop</h1>
                    <p>
                    Join us for an enlightening and educational experience at our upcoming workshops, where we will be honored to host some of the most prominent and accomplished professionals in the industry. Get ready to be inspired and learn from experts like Abhinav Arora, Co-Founder and CMO of Avalon, Shobhit Saxena, Head of Products of Zee Media, Akshay Johri, Product Manager of Microsoft, and two startup founders from our very own college, Dhruva Goyal from Bugbase and Nirudh Arun from Formi along with many more. These industry leaders will share their valuable insights and experiences on various topics related to entrepreneurship and product development. This is a unique opportunity for attendees to gain a wealth of knowledge and make meaningful connections. Don't miss out on this fantastic learning opportunity!
                    </p>
                    <Link to="/register">
                        <button>Register Now</button>
                    </Link>
                </div>
            </div>
            
            </div>
            
            
      {/* <div className="speaker-img">
        <img
          src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
          alt="Speaker 1"
          className="circle-img"
        />
      </div>
      <div className="speaker-img">
        <img
          src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
          alt="Speaker 1"
          className="circle-img"
        />
      </div>
      <div className="speaker-img">
        <img
          src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
          alt="Speaker 1"
          className="circle-img"
        />
      </div>
      <div className="speaker-img">
        <img
          src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
          alt="Speaker 1"
          className="circle-img"
        />
      </div>  */}
    </div>
    <Speakers/>
    </>
  );
};

export default Workshop;