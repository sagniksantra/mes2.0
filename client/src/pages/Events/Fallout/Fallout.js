import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Landing from "../../Landing/Landing";
//import "./PitchTank.css";
import mes from "./../../../assets/LogoFinal.png";
import { Link } from "react-router-dom";
import Speakers from "../../../components/Speakers/Speakers";


const Fallout = () => {
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
                    <h1>Fallout</h1>
                    <p>
                    E-cell's very own moot court designed for aspiring Entrepreneurs, perfect for fast-paced debate, and dotted with legal article throughouts . Here, we will see students embodying lawyers and fighting cases in an action-packed and heated environment guaranteed to leave anyone who attempts to participate STARSTRUCK!

Fallout puts participants into dangerous situations which will have them running their Entrepreneurial problem solving skills to get situations under control , its survival of the fittest and most logical, May the best team WIN!

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

export default Fallout;