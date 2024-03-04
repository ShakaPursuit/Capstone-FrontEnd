import React from 'react';
import logo from "../assets/GH.png"
import "../App.css";
import NavBar from './NavBar';

const AccountSettings = () => {
    return (
        <>
            <div className="frame">
                <div className='div'>

        <header id='head'><h1>Account Settings</h1></header>
              
      <div >
        <button id='delete-account'>delete</button>
        <input className="two" type="text" placeholder="Enter UserName"/>
      
        {/* <img  className="toggle-on-instance" src={toggle}/> */}
        
        <input className="three" type="text" placeholder="Enter Password"/>
        {/* <div className="overlap"> */}
        <input className="four" type="text" placeholder="Enter Email"/>
        {/* <div className="overlap">

</div> */}
      </div>
<img id="logo"src={logo}/>
         <button id='delete' >UPDATE
      </button>
         
       
       
     <div>

   
     </div>
    </div>
    <NavBar/>
</div>
        </>
      
            
     
        // </div>
    );
};

export default AccountSettings;