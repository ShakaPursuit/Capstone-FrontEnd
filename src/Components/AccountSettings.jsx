import React from 'react';
import logo from "../assets/GH.png"
import "../App.css";

const AccountSettings = () => {
    return (
      
            <div className="frame">
      <div >
        <input className="two" type="text" placeholder="Enter UserName"/>
      
        {/* <img  className="toggle-on-instance" src={toggle}/> */}
        
        <input className="three" type="text" placeholder="Enter Password"/>
        {/* <div className="overlap"> */}
        <input className="four" type="text" placeholder="Enter Email"/>
        {/* <div className="overlap">

        </div> */}
        <img id="logo"src={logo}/>
      </div>
         {/* <button className='create'>CREATE ACCOUNT</button> */}
         
       
       
     <div>

   
     </div>
    </div>
            
     
        // </div>
    );
};

export default AccountSettings;