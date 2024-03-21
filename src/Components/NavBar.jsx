import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GoalHive from "../assets/GH_Nobg.png";
import ProfileIcon from "../assets/profile_icon.png";
import HiveChat from "../assets/hivechat_icon.png";
import Buddies from "../assets/find_a_buddy_icon.png";
import CreateGoal from "../assets/GH_create_goal.png";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";

const NavBar = ({ navBar, setNavBar }) => {
  const location = useLocation();
  // console.log(location);
  useEffect(() => {
    // setNavBar(false);
    if (location.pathname === "/") {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }, [location.pathname]);

  return navBar ? (
    <nav className="nav">
      <Link className="navbar-link" to="/">
        <img id="goalhive-icon" src={GoalHive} alt="" />
        <span>Home</span>
      </Link>

      <Link className="navbar-link" to="/findbuddy">
        <img src={Buddies} alt="" />
        <span>Find Friends</span>
      </Link>

      <Link className="navbar-link" to="/goals">
        <img src={CreateGoal} alt="" />
        <span>Goals</span>
      </Link>

      <Link className="navbar-link" to="/hivechat">
        <img src={HiveChat} alt="" />
        <span>HiveChat</span>
      </Link>

      <Link className="navbar-link" to="/userProfile">
        <img src={ProfileIcon} alt="" />
        <span>Profile</span>
      </Link>
      <button
        onClick={() => {
          setNavBar(!navBar);
        }}
      >
        open
      </button>
    </nav>
  ) : (
    <button
      className="navbar-close"
      onClick={() => {
        setNavBar(!navBar);
      }}
    >
      <RxHamburgerMenu />
    </button>
  );
};

export default NavBar;
