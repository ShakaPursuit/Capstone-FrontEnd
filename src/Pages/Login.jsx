import React from "react";
import toggle from "../assets/toggle.png"
import logo from "../assets/GH.png"
import quote from "../assets/quote.png"

import "../App.css";

 const Login = () => {
  return (<>
  <div>
    <div id="container">


    <div className="frame">
      <div className="div">
        <img className="updated-logo"src={logo}/>
        <input className="text-wrapper-2" type="text" placeholder="UserName"/>
      
        <img  className="toggle-on-instance" src={toggle}/>
        
        <input className="text-wrapper-3" type="text" placeholder="Password"/>
        <div className="overlap">

         <button className="login">LOGIN</button>
        </div>
     <div classname='center'>
         
       
        <button className="sign-up">Sign-Up</button>

     </div>
      <img className="quote" src={quote}/>
      </div>
    </div>
  </div>
    </div>
  </>
  );
};

export default Login
