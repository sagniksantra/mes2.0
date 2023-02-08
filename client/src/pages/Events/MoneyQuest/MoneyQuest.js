import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Landing from "../../Landing/Landing";
//import "./MoneyQuest.css";
import mes from "./../../../assets/LogoFinal.png";
import { Link } from "react-router-dom";
import Speakers from "../../../components/Speakers/Speakers";


const MoneyQuest = () => {
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
                    <h1>Money Quest</h1>
                    <p>
                    Money Quest is a replica of the famous board game, MONOPOLY,  but with a twist. It is an offline game of MONOPOLY mixed with a game of treasure hunt around the campus. The students participate in teams of 2-4 and run around the campus trying to crack the clues given by us. All the teams would be assigned 1 associate who will be with the team all the time to verify the actions of the team members. Each team has to physically visit the places and get a token as a proof. Each round lasts for 45 minutes and after every round, all the teams have to visit the starting point where the bidding of the places that the team has been to takes place that means if a team figured out what the clue was and went to the place and got a token, they can bid for that place and the highest bidder is sold the place. If a team has no tokens, they cannot take part in the bidding round and will have to play in the next round.

So in the next round, the teams that have bought a property, get paid rent by all the other teams who pass by their property. All these rental transactions happen without the knowledge of the team members and are handled by the respective associate. The team members can question the associate about their balance and other things at any time.
At the end of the final round, when all the properties have been sold, the team with the highest asset value, WINS.

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

export default MoneyQuest;