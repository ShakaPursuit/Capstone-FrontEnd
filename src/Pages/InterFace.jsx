import React  from "react";
import GoalHive from "../assets/GH_Nobg.png";
import ProfileIcon from "../assets/profile_icon.png";
import HiveChat2 from "../assets/hivechat_icon.png";
import Buddies from "../assets/find_a_buddy_icon.png";
import CreateGoal from "../assets/GH_create_goal.png";
import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LineBar from "../Components/LineBar";
import HiveChat from "./HiveChat";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.css'


const InterFace = () => {
    const logoStyle = {
      height: '60px',
      width: '50px',
      borderRadius: '15px',
    };
    
    const API = import.meta.env.VITE_BASE_KEY;
    let { userprofile_id } = useParams();
    
    const [users, setUsers] = useState([]);
    const [goals, setGoals] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [number, setNumber] = useState(['70%']);
    
    
    console.log('CSS variable updated:', number);
    
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };

  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${API}/profiles`);
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
          const data = await response.json();
          setUsers(data);
          console.log(users);
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };
      fetchData();
    }, []);
  
    useEffect(() => {
      const fetchGoals = async () => {
        try {
          const response = await fetch(`${API}/goals`);
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
          const data = await response.json();
          setGoals(data);
          console.log(goals);
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };
      fetchGoals();
    }, []);
    // console.log(goals)
    
   
    return (
      <>
      {/* <body className='body'> */}

 
        <div id="interface">
          
          
          <main>
            <div className="container">
              <div className="row">
                <div className="col">
                
                  <div id="progress-graph">
                    <h2>
                        {<LineBar number={number}/>}
                    </h2>
                  </div>
                </div>
                <div  id="p-card"className="col">
                <strong>@John54</strong> 
                  <div id="user-card">
                    <div className="row">
                        <div className="col">
                        <h2><img id="single-photo"src={'profile1.png'}/></h2>
                        </div>
                        
                        {/* <div className="col">Friends<div className="row">36
                            </div> </div>
                        <div className="col">Goals<div className="row">3</div>
                        <h1 className="mock-user">John Connor</h1></div> */}

                        
                    
                        


                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="container">
              <div className="row">
                <div className="col">
                    <br></br><br></br>
                  <div className="col">
                    {/* {<HiveChat/>} */}
                  
                    {/* <div>
                      <h2>Misc</h2>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="community-feed">
              {/* <h2>&nbsp;Community Feed</h2> */}
             
              </div>
          </main>
          <footer>
            { <div className="scroll">
                {users.map((user, index) => (
                  <div className="user" id={user.id} key={index}>
                    <p>{user.username}</p>
                    <img id="feed" src={user.profile_img} alt="" />
                    <div className="user-goals">
                        <br></br>
                      {goals
                        .filter((goal) => goal.goal_id === user.userprofile_id)
                        .map((goal, goalIndex) => (
                          <p key={goalIndex}>〉{goal.description}</p>
                          ))}
                    </div>
                  </div>
                ))}
              </div>}
          </footer>
        </div>
        {/* </body> */}
      </>
    );
  };
  
  export default InterFace;