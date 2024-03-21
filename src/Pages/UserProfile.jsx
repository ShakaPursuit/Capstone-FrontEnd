import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./UserProfile.css";
import Goals from "./Goals";

const UserProfile = ({ setUser, setToken, user, token }) => {
  const API = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  // console.log("The user: ", user);
  const [profiles, setProfiles] = useState({});

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

  console.log("useState: ", profiles.username);

  return (
    <div className="userprofile-container">
      {/* <h1>This is the Profile Page!</h1> */}
      <div className="top-bar">
        <Button
          variant="outline-light"
          onClick={handleLogout}
          size="sm"
          style={{ color: "black" }}
        >
          Log Out
        </Button>
      </div>

      <div className="profile-header">
        <img src={profiles.profile_img} alt="Profile Image" />
        <h2>
          {profiles.firstname} {profiles.lastname}
        </h2>
        <h4>{`@${profiles.username}`}</h4>
        <p>Age: {profiles.age}</p>
        <p>Gender: {profiles.gender}</p>
        <p>
          Bio: <br />
          {profiles.bio}
        </p>
      </div>

      <div className="stats">
        <div className="stat">
          <h3>Active Goals</h3>
          <p>{/* Add number of friends */}</p>
        </div>
        <div className="stat">
          <h3>Completed Goals</h3>
          <p>{/* Add number of posts */}</p>
        </div>
        <div className="stat">
          <h3></h3>
          <p>{/* Add number of completed goals */}</p>
        </div>
      </div>

      {/* <Goals /> */}

    </div>
  );
};

export default UserProfile;
