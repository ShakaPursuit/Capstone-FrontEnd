import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import toggle from "../assets/toggle.png";
import logo from "../assets/GH.png";
import quote from "../assets/quote.png";

import "../App.css";

const Login = ({ setUser, setToken, user, token,}) => {
  const API = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password_hash: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateLoginDialogue = (user,  token) => {
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("token", token)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${API}/profiles/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.user.userprofile_id) {
          const { user, token } = res;
          console.log({ user, token });
          setUser(user);
          setToken(token);
          updateLoginDialogue()
          setFormData(() => ({
            username: "",
            password_hash: "",
          }));
          navigate("/");
        } else {
          console.log("Something went wrong", res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <div id="container">
          <div className="frame">
            <div className="div">
              <img className="updated-logo" src={logo} />

              <form onSubmit={handleLogin}>
                <p>uiqgeiugeiufg</p>
                <p>{user}</p>
                <p>{token}</p>
                <input
                  className="text-wrapper-2"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />

                <br />
                <br />

                {/* <img className="toggle-on-instance" src={toggle} /> */}
                <input
                  className="text-wrapper-3"
                  type="password"
                  placeholder="Enter Password"
                  name="password_hash"
                  value={formData.password_hash}
                  onChange={handleInputChange}
                  required
                />

                <br />
                <br />

                <div className="overlap">
                  <button type="submit" className="login">
                    LOGIN
                  </button>
                </div>
              </form>

              <br />

              <div className="center">
                <Link to="/signup">
                  <button className="sign-up">Sign-Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
