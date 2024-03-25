import React, { useEffect,useState } from "react";
import { Link, useLocation } from "react-router-dom";
import GoalHive from "../assets/GH_Nobg.png";
import ProfileIcon from "../assets/profile_icon.png";
import HiveChat from "../assets/hivechat_icon.png";
import Buddies from "../assets/find_a_buddy_icon.png";
import CreateGoal from "../assets/GH_create_goal.png";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar2.css";

const NavBar = ({ navBar, setNavBar }) => {
  

  useEffect(() => {
    // setNavBar(false);
    if(location.pathname === "/"||location.pathname === "/dash"){
      setNavBar(true)
      setTimeout(() => {
        setNavBar(false);
      }, 10000); 
    } else{
      setNavBar(false)
    }
  }, [location.pathname]);

 

  





  return navBar ?  (
    <nav className="nav">
      <Link className="navbar-link" to="/">
  
        <img id="goalhive-icon" src={GoalHive} alt="" />
        <span>Home</span>
      </Link>

      <Link className="navbar-link" to="/findbuddy">
        <img src={Buddies} alt="" />
        <span>Find Friends</span>
      </Link>


      {/* <Link className="navbar-link" to="/goals">
        <img id="createGoal-icon" src={CreateGoal} alt="" />

      <Link className="navbar-link" to="/goals/new">
        <img src={CreateGoal} alt="" />

        <span>Goals</span>
      </Link> */}

      <Link className="navbar-link" to="/hivechat">
        <img src={HiveChat} alt="" />
        <span>HiveChat</span>
      </Link>

      <Link className="navbar-link" to="/userProfile">
        <img src={ProfileIcon} alt="" />
        <span>Profile</span>
      </Link>

      <button id="navbar-close"


        onClick={() => {
          setNavBar(!navBar);
        }}
        onMouseEnter={()=>{
          setNavBar(!navBar)
          
         }}
      >
        ↩
      </button>
    </nav>
  ) : (
    <button
      className="navbar-close"
      onClick={() => {
        setNavBar(!navBar);
        
      }}
      
           onMouseEnter={()=>{
            setNavBar(!navBar)
           }}
         
      
    >
      <  RxHamburgerMenu className="hamburger" onMouseEnter={()=>{ setTimeout(() => {
        setNavBar(false);
      }, 6000); }} />
    </button>
  );
};

export default NavBar;
