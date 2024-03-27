import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/GH_Logo.png";
import "../Pages/Signup.css"
const Signup = ({ setUser, setToken }) => {
  const API = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password_hash: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API}/profiles`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("The response: ",res);
        if (res.user.userprofile_id) {
          setUser(res.user);
          setToken(res.token);
          localStorage.setItem("user", JSON.stringify(res.user));
          localStorage.setItem("token", JSON.stringify(res.token));
          setFormData(() => ({
            username: "",
            email: "",
            password_hash: "",
          }));
          navigate("/profiles/newProfile");
        } else {
          console.log("The error: ", res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="signup-container">
        <img className="signup-logo" src={logo} />
        <form className="form" onSubmit={handleSubmit}>
          <input
          className="text-wrapper-2"
            type="text"
            placeholder="Enter Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {/* <br />
          <br /> */}
          <input
          className="text-wrapper-3"
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {/* <br />
          <br /> */}
          <input
          className="text-wrapper-4"
            type="password"
            placeholder="Enter Password"
            name="password_hash"
            value={formData.password_hash}
            onChange={handleInputChange}
            required
          />
          {/* <br />
          <br /> */}
          <button className="signup-create" type="submit">CREATE ACCOUNT</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
