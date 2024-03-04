import React from "react";
import "../Profile.css"
import background from "../assets/pf.png"
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
const ProfileSettings=()=>{





return(<>
<div className="frame" >
    <div className="div" id="p-Settings">
<h1 className="profile-header">Profile Settings 
<Link id="ac" to="/accountsettings"><p id="inner"> 📲Account Settings</p></Link></h1>
<label htmlFor="interest">Choose Interest 
  <select value="interest" id="interest">
    <option value="Art">Art</option>
    <option value="Art">Acting</option>
    <option value="Art">Astrology</option>
    <option value="Art">Board Games</option>
    <option value="Art">Baking</option>
    <option value="Art">BaseB all</option>
    <option value="Art">BasketBall</option>
    <option value="Art">Art</option>


  </select>

</label>
<div className="text-wrapper-1">
    <h2>Profile Pic</h2>
    
    <input id="file"type="file"/>

</div>

   
    <br></br>
    <div className="text-wrapper-5">

    <label htmlFor="age">Age(optional)
        <input id="age" type="number" placeholder="Enter Age"/>
    </label>
    <br></br>
    <br></br>
    <label htmlFor="gender">Gender(optional)
    <select  id="gender" >
       <option>Select a Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Transgender">Transgender</option>
        <option value="Other">Other</option>
        <option value="Prefer Not To Say">Prefer Not To Say</option>


    </select>

    </label>
    </div>
    <br></br>
    <br></br>
 
        <h3 className="text-wrapper-5">About Me</h3>
        {/* <img id="bgi"src={background}/> */}
        
    </div>
    <label>


    <textarea id="about" className="text-wrapper-6">

    </textarea>
    </label>
    {/* <button id="submit" className="text-wrapper-7">SUBMIT</button> */}

</div>
<NavBar/>



</>)




}
export default ProfileSettings