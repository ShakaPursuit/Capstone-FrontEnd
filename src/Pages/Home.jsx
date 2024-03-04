import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Home = () => {
  return (
    <>
    <div className="home">
      <h1>This is the Home(Dashboard) Page</h1>
      <Link style={{color: "black"}} to="/goals">
        <h2>Create Goal</h2>
      </Link>
      <h2>My Progress</h2>
    </div>
    <NavBar /> 
    
    </>
  );
};

export default Home;
