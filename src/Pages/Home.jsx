import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Home = ({ user, token }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user && !token) {
  //       navigate("/signup");
  //   }
  // }, [user, token, navigate]);
  return (
    <>
      <div className="home">
        <h1>This is the Home(Dashboard) Page</h1>
        <Link style={{ color: "black" }} to="/goals">
          <h2>Create Goal</h2>
        </Link>
        <h2>My Progress</h2>
      </div>
      <NavBar />
    </>
  );
};

export default Home;
