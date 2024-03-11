import React from "react";
import toggle from "../assets/toggle.png";
import logo from "../assets/GH.png";
import quote from "../assets/quote.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";


const Login = ({ setUser, setToken }) => {
  const API = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password_hash: "",
  });

  console.log(formData.username);

  const handleUser = (e) => {
    setUsername(e.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      username: e.target.value,
    }));
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      password_hash: e.target.value,
    }));
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    fetch(`${API}/users/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.user_id===res.id) {
        const { user, token } = res;
        setUser(user);
        setToken(token);
        setFormData({
          username: "",
          password_hash: "",
        });
        
        
      } else {
        console.log(res);
        navigate('/');
      }
    })
    .catch((err) => console.log(err));
  };
        

 const Login = () => {
 
  return (
    <>
      <div>
        <div id="container">
          <div className="frame">
            <div className="div">
              <img className="updated-logo" src={logo} />
              <form onSubmit={handleLogin}>
                <input
                  className="text-wrapper-2"
                  type="text"
                  onChange={handleUser}
                  placeholder="UserName"
                />
                <img className="toggle-on-instance" src={toggle} />
                <input
                  className="text-wrapper-3"
                  type="password"
                  onChange={handlePass}
                  placeholder="Password"
                />
                <div className="overlap">
                  <button type="submit" className="login">
                    LOGIN
                  </button>
                </div>
              </form>
              <div classname="center">
               <Link to="/signup">
                <button className="sign-up">Sign-Up</button>
               </Link>
              </div>
              <img className="quote" src={quote} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
}

export default Login;