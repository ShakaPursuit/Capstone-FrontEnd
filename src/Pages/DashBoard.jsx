import React from "react";
import LineBar from "../Components/LineBar";
import { Link } from "react-router-dom";
import logo from "../assets/GH_Logo.png"
import "../Pages/Dash.css"


const Dash = () => {



    return (<>
        <div className="scroll">
            {/* <h1 id="topbar">Goal Hive</h1> */}
          
           < img id="dash-logo2" src={logo}/>
            
     
           
            <header><h1>Goal Hive Dash</h1></header>


            <Link to="/goals/new">
            
            <button id="create-goal">CREATE GOAL</button>
            </Link>
            <h2>

            </h2>

            <strong>@John54</strong>

            <h2><img id="single-photo" src={'profile1.png'} /></h2>
            {/* <div id="p-card" className="col"> */}
                <div id="user-card">
                    <div className="row">
                        <div className="col">
                            {/* {<LineBar/>} */}
                        </div>
                    </div>
                </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
                    <div id="dash-logo" >
                        <Link to="/feed">
                            <button id="feed">Feed</button>
                        </Link>
                        <br></br>

                        <Link to="/friendrequests">

                            <button id="requests">Friends/Request</button>

                        </Link>
                        <br></br>

                        <Link to="/currentgoals">

                            <button id="active-goals">Active Goals</button>
                        </Link>


                    </div>
              


            </div>
        {/* </div> */}




    </>)

}

export default Dash

