import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import AccountSettings from "../Components/AccountSettings";
import Profile from "../assets/profile_icon.png";

const UserProfile = ({ setUser, setToken, user, token }) => {
  const API = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState([]);

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
          console.log("The response from fetch: ", res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("useState: ", profiles.email);

  return (
    <div className="userprofile-container">
      <h1>This is the Profile Page!</h1>
      <Button
        variant="outline-light"
        onClick={handleLogout}
        size="sm"
        style={{ color: "black" }}
      >
        Log Out
      </Button>

      <div>

      </div>

      {/* {profiles.map((user) => {
        return (
          <div key={user.userprofile_id}>
            <h1>{user.firstname}</h1>
          </div>
        );
      })} */}
    </div>
  );
};

export default UserProfile;
