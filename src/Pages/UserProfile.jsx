import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import AccountSettings from "../Components/AccountSettings";
import Profile from "../assets/profile_icon.png";

const UserProfile = () => {
  const API = import.meta.env.VITE_BASE_URL;
  const [user, setUser] = useState([])

  const fetchData = () => {
    fetch()
    .then()
    .then()
    .catch()
  }

  return (
    <div className="user-profile-container">
      <div className="user-profile"></div>
      <h1>This is the Profile Page!</h1>
    </div>
  );
};

export default UserProfile;
