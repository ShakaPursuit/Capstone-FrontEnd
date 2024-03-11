import React from "react";
import { Link } from "react-router-dom";
import GoalHive from "../assets/GH_Nobg.png";
import ProfileIcon from "../assets/profile_icon.png";
import HiveChat from "../assets/hivechat_icon.png";
import Buddies from "../assets/find_a_buddy_icon.png";
import CreateGoal from "../assets/GH_create_goal.png";
import "./Navbar.css";

const NavBar = () => {
  const logoStyle = {
    height: "auto",
    maxWidth: "70%",
    border:"1px solid black",
    radius:"15px",
 
   
   
  };
  return (
    <nav className="nav">
      
      <Link to="/">
        <img id="goalhive-icon"style={logoStyle} src={GoalHive} alt="" />
      </Link>
      <Link to="/findbuddy">
        <img id='buddies-logo'style={logoStyle} src={Buddies} alt="" />
      </Link>
      <Link to="/goals">
        <img id='createGoal-icon'style={logoStyle} src={CreateGoal} alt="" />
      </Link>
      <Link to="/hivechat">
        <img id='hivechat-icon'style={logoStyle} src={HiveChat} alt="" />
      </Link>
      <Link to="/profile">
        <img id="profile-icon"style={logoStyle} src={ProfileIcon} alt="" />
      </Link>
    </nav>
  );
};

export default NavBar;
