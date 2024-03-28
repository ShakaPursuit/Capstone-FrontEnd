import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./UserProfile.css";
import Goals from "./Goals";
import profilePic from "../assets/profile-male-blue.png";

const UserProfile = ({ setUser, setToken, user, token }) => {
  const API = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  // console.log("The user: ", user);
  const [profiles, setProfiles] = useState({});
  const [selectedGoals, setSelectedGoals] = useState(false);
  // const [goals, setGoals] = useState({});

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const fetchData = () => {
    try {
      fetch(`${API}/profiles/${user.userprofile_id}`, {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setProfiles(res);
          // console.log("The response from fetch: ", res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("user obj:", profiles);

  return (
    <div className="userprofile-container">
      <img id="profilelogo" src={profilePic} alt="Profile Image" />
      <div className="profile-header">
        <h5>
          {profiles.firstname} {profiles.lastname}
        </h5>
        <h6>{`@${profiles.username}`}</h6>
        <h6>Age: {profiles.age}</h6>
        <h6>Gender: {profiles.gender}</h6>
      </div>
      <div className="css-button-shadow-border--black">
        <Button
          className="css-button-shadow-border--black"
          onClick={handleLogout}
          style={{ color: "white" }}
        >
          Log Out
        </Button>
      </div>
      <div className="bio">
        <p>
          Bio: <br />
          {profiles.bio}
        </p>
      </div>
      <div className="active">
        <button
          className="css-button-3d--sky"
          onClick={() => setSelectedGoals(false)}
        >
          Active Goals
        </button>
      </div>
      <div className="completed">
        <button
          className="css-button-3d--sand"
          onClick={() => setSelectedGoals(true)}
        >
          Completed
        </button>
      </div>
      <div className="goals">
        {!selectedGoals ? (
          <Goals user={user} token={token} />
        ) : (
          <span>List of Completed Goals</span>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
