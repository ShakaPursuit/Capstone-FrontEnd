import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import toggle from "../assets/toggle.png";
import logo from "../assets/GH.png";
import quote from "../assets/quote.png";

import "../App.css";


const Login = ({ setUser, setToken }) => {
  const API = import.meta.env.VITE_BASE_KEY;
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
    
    fetch(`${API}/profiles/login`, {
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
        


 
  return (
    <>
      <div id="login-page">
        <div >

        <header><img className="updated-logo" src={logo} /></header>

        </div>
        <div>

        <main><form onSubmit={handleLogin}>
                <input
                className="new-login"
                 
                  type="text"
                  onChange={handleUser}
                  placeholder="UserName"
                />
                <br></br>
                <br></br>
                {/* <img className="toggle-on-instance" src={toggle} /> */}
                <input
                className="new-password"
             
                  type="password"
                  onChange={handlePass}
                  placeholder="Password"
                />
                <div id="login-div"> 
                <br></br>
                  <button id="new-submit"type="submit" >
                    LOGIN
                  </button> 
                 </div> 
              </form>
              
              <br></br>
              <div className="new-SignUpDiv">

        <Link to="/signup">
                <button className="new-signup" >Sign-Up</button>
               </Link>
              </div>

              </main>
        </div>

        <div className="footer">
        <footer>
          <img className="bottom-logo" src={quote}/>
        </footer>
        </div>

       
      </div>
    </>
  );
};


export default Login;