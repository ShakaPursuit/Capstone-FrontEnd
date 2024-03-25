// import React from 'react';
import "../Pages/GoalProfile.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const GoalProfile = () => {
  const API = import.meta.env.VITE_BASE_URL;
  const [goals, setGoals] = useState([]);
  const [users, setUsers] = useState([]);
  const [interest, setInterest] = useState([]);
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/profiles`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch(`${API}/allgoals`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setGoals(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchGoals();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/interests`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setInterest(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, []);

  const goToPreviousCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : users.length - 1
    );
  };

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < users.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlers = useSwipeable({
    onSwipedRight: goToNextCard,
    onSwipedLeft: goToPreviousCard,
  });

  const SwipeableComponent = () => {
    return (
      <div className="carousel" {...handlers}>
                <div class="theader">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                  <i class="fa fa-comments" aria-hidden="true"></i>
                  <div class="tlogo">
                    <img
                      src="src/assets/pf.png"
                      alt="Tinder Logo"
                      title="Tinder Logo"
                    />
                  </div>
                </div>
        {users.map((user, index) => {
          const isCurrentCard = index === currentIndex;
          return (
            <div
              className={`user-card${isCurrentCard ? " active" : ""}`}
              key={index}
              {...handlers}
            >
              <div class="tbg">
                <div class="tbgwrap">
                  <div class="tphoto">
                    <img
                      src={user.profile_img}
                      title="tphoto"
                      alt="Tinder Photo"
                    />
                    <div class="tname">
                      {user.username}, <span class="age">{user.age}</span>
                      {goals
                        .filter((goal) => goal.goal_id === user.userprofile_id)
                        .map((goal, goalIndex) => (
                          <p key={goalIndex}>〉{goal.description}</p>
                        ))}
                      {interest
                        .filter(
                          (goal) => goal.interest_id === user.userprofile_id
                        )
                        .map((goal, goalIndex) => (
                          <p key={goalIndex}>〉{goal.name}</p>
                        ))}
                    </div>
                  </div>
                  <div class="tcontrols">
                    <div class="tno">
                      <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div class="tyes">
                      <i class="fa fa-heart" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <div class="credit">
                  <a href="http://themakery.jcink.net"></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="carousel-container">
        <h1>Find a Buddy</h1>
        <SwipeableComponent />
      </div>
    </>
  );
};

//     return (
// //         <div>
// //             <div class="tbg">
// //   <div class="theader">
// //     <i class="fa fa-cog" aria-hidden="true"></i>
// //     <i class="fa fa-comments" aria-hidden="true"></i>
// //     <div class="tlogo">
// //       <img src="src/assets/pf.png" alt="Tinder Logo" title="Tinder Logo" />
// //     </div>
// //   </div>
// //   <div class="tbgwrap">
// //     <div class="tphoto">
// //       <img src="public/profile1.png" title="tphoto" alt="Tinder Photo" />
// //       <div class="tname">John Doe, <span class="age">27</span></div>
// //     </div>
// //     <div class="tcontrols">
// //       <div class="tno"><i class="fa fa-times" aria-hidden="true"></i></div>
// //       <div class="tyes"><i class="fa fa-heart" aria-hidden="true"></i></div>
// //     </div>
// //   </div>
// //   <div class="credit"><a href="http://themakery.jcink.net"></a></div>
// // </div>
// //         </div>
//     );

export default GoalProfile;
