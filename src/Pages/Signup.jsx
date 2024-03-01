import React from 'react';
import logo from "../assets/GH.png"

const Signup = () => {
    return (
      
            <div className="frame">
      <div className="div">
        <img className="updated-logo"src={logo}/>
        <input className="text-wrapper-2" type="text" placeholder="Enter UserName"/>
      
        {/* <img  className="toggle-on-instance" src={toggle}/> */}
        
        <input className="text-wrapper-3" type="text" placeholder="Enter Password"/>
        {/* <div className="overlap"> */}
        <input className="text-wrapper-4" type="text" placeholder="Enter Email"/>
        <div className="overlap">

        </div>
         <button className='create'>CREATE ACCOUNT</button>
         
       
       
     <div>

   
     </div>
      </div>
    </div>
            
     
        // </div>
    );
};

export default Signup;