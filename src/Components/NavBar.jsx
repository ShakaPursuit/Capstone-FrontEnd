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
    border:"2px solid white",
    radius:"15px",
 
   
   
  };
  return (
    <nav className="nav">
      
      <Link to="/">
        <img style={logoStyle} src={GoalHive} alt="" />
      </Link>
      <Link to="/findbuddy">
        <img style={logoStyle} src={Buddies} alt="" />
      </Link>
      <Link to="/goals">
        <img style={logoStyle} src={CreateGoal} alt="" />
      </Link>
      <Link to="/hivechat">
        <img style={logoStyle} src={HiveChat} alt="" />
      </Link>
      <Link to="/profile">
        <img style={logoStyle} src={ProfileIcon} alt="" />
      </Link>
    </nav>
  );
};

export default NavBar;
