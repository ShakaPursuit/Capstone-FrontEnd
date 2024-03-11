import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const Home = () => {
  const API = import.meta.env.VITE_API_KEY;

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
        console.log(users)
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchData()
  }, [])
  return (


    <>

      <div className="frame">
        <div  >
          <div >
            <h1>DashBoard </h1>
            <Link style={{ color: "black" }} to="/goals">

              <button className="create-goal">➕&nbsp;Create Goal</button>
            </Link>
            <h2></h2>
          </div>
          <div id='users'>
            <label id='hive-label' htmlFor="users"> Community Feed
            </label>
            <div className="scroll">

              {

                users.map((user, index) => {
                  return (<>





                    <div className="user" id={user.id} key={index}>
                      <p >
                        {user.firstname + " " + user.lastname}<br></br>
                      </p>
                      {/* {user.gender==="female" ? '👩🏻‍🦳':'👨🏻' } */}
                      <img id='feed' src={`${user.profile_img}`} />
                    </div>
                  </>)
                })

              }
            </div>

            <button className="milestones">Hive Tracker</button>
          </div>
          <button className="goals">Current Goals</button>
        </div>

      </div>

      <NavBar />

    </>
  );
};

export default Home;
