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

                    <button id='update' >Update Settings📲</button>
                    <div >
                        <button id='delete-account'>🗑️ Delete Account</button>

                        <input className="two" type="text" placeholder="Enter UserName" />

                      

                        <input className="three" type="text" placeholder="Enter Password" />
                   
                        <input className="four" type="text" placeholder="Enter Email" />
                       


                        <img id="logo" src={logo} />
                    </div>


                    <div>


                    </div>
                </div>
                <NavBar />
            </div>
        </>



        // </div>
    );
};

export default AccountSettings;