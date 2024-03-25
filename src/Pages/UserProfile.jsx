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
      {/* <h1>This is the Profile Page!</h1> */}
      <div className="top-bar">
        <Button
          className="css-button-gradient--5"
          variant="outline-light"
          onClick={handleLogout}
          size="sm"
          style={{ color: "white" }}
        >
          Log Out
        </Button>
      </div>

      <div className="profile-header">
        <img src={profilePic} alt="Profile Image" />
        <h4>
          {profiles.firstname} {profiles.lastname}
        </h4>
        <h6>{`@${profiles.username}`}</h6>
        <p>Age: {profiles.age}</p>
        <p>Gender: {profiles.gender}</p>
        <p id="bio">
          Bio: <br />
          {profiles.bio}
        </p>
      </div>

      <div className="stats">
        <div className="stat">
          <button
            className="css-button-3d--sky"
            onClick={() => setSelectedGoals(false)}
          >
            Active Goals
          </button>
          <p>{/* Add number of friends */}</p>
        </div>
        <div className="stat">
          <button
            className="css-button-3d--sand"
            onClick={() => setSelectedGoals(true)}
          >
            Completed Goals
          </button>
          <p>{/* Add number of posts */}</p>
        </div>
        <div className="stat">
          <h3></h3>
          <p>{/* Add number of completed goals */}</p>
        </div>
      </div>

      {!selectedGoals ? (
        <Goals user={user} token={token} />
      ) : (
        <span>List of Completed Goals</span>
      )}
    </div>
  );
};

export default UserProfile;
