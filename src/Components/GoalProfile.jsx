// // import React from 'react';
// import "../Pages/GoalProfile.css";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useSwipeable } from "react-swipeable";

// const GoalProfile = () => {
//   const API = import.meta.env.VITE_BASE_URL;
//   const [goals, setGoals] = useState([]);
//    const [allusers, setAllUsers] = useState([]);
//   const [interest, setInterest] = useState([]);
//   const { id } = useParams();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${API}/profiles`);
//         if (!response.ok) {
//           throw new Error(`Request failed with status: ${response.status}`);
//         }
//         const data = await response.json();
//         setAllUsers(data);
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchGoals = async () => {
//       try {
//         const response = await fetch(`${API}/allgoals`);
//         if (!response.ok) {
//           throw new Error(`Request failed with status: ${response.status}`);
//         }
//         const data = await response.json();
//         setGoals(data);
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     };
//     fetchGoals();
//   }, [id]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${API}/interests`);
//         if (!response.ok) {
//           throw new Error(`Request failed with status: ${response.status}`);
//         }
//         const data = await response.json();
//         setInterest(data);
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const goToPreviousCard = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : allusers.length - 1
//     );
//   };

//   const goToNextCard = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex < allusers.length - 1 ? prevIndex + 1 : 0
//     );
//   };

//   const handlers = useSwipeable({
//     onSwipedRight: goToNextCard,
//     onSwipedLeft: goToPreviousCard,
//   });

//   const SwipeableComponent = () => {
//     return (
//       <div className="carousel" {...handlers}>
//                 <div class="theader">
//                   <i class="fa fa-cog" aria-hidden="true"></i>
//                   <i class="fa fa-comments" aria-hidden="true"></i>
//                   <div class="tlogo">
//                     <img
//                       src="src/assets/pf.png"
//                       alt="Tinder Logo"
//                       title="Tinder Logo"
//                     />
//                   </div>
//                 </div>
//         {allusers.map((user, index) => {
//           const isCurrentCard = index === currentIndex;
//           return (
//             <div
//               className={`user-card${isCurrentCard ? " active" : ""}`}
//               key={index}
//               {...handlers}
//             >
//               <div class="tbg">
//                 <div class="tbgwrap">
//                   <div class="tphoto">
//                     <img
//                       src={user.profile_img}
//                       title="tphoto"
//                       alt="Tinder Photo"
//                     />
//                     <div class="tname">
//                       {user.username}, <span class="age">{user.age}</span>
//                       {goals
//                         .filter((goal) => goal.goal_id === user.userprofile_id)
//                         .map((goal, goalIndex) => (
//                           <p key={goalIndex}>〉{goal.description}</p>
//                         ))}
//                       {interest
//                         .filter(
//                           (goal) => goal.interest_id === user.userprofile_id
//                         )
//                         .map((goal, goalIndex) => (
//                           <p key={goalIndex}>〉{goal.name}</p>
//                         ))}
//                     </div>
//                   </div>
//                   <div class="tcontrols">
//                     <div class="tno">
//                       <i class="fa fa-times" aria-hidden="true"></i>
//                     </div>
//                     <div class="tyes">
//                       <i class="fa fa-heart" aria-hidden="true"></i>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="credit">
//                   <a href="http://themakery.jcink.net"></a>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="carousel-container">
//         <h1>Find a Buddy</h1>
//         <SwipeableComponent />
//       </div>
//     </>
//   );
// };
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { RiProfileLine } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { GiStairsGoal } from "react-icons/gi";
import "../Pages/GoalProfile.css";

const GoalProfile = () => {
  const API = import.meta.env.VITE_BASE_URL;
  const [goals, setGoals] = useState([]);
  const [allusers, setAllUsers] = useState([]);
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
        setAllUsers(data);
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
      prevIndex > 0 ? prevIndex - 1 : allusers.length - 1
    );
  };

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < allusers.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlers = useSwipeable({
    onSwipedUp: goToNextCard,
    onSwipedDown: goToPreviousCard,
  });

  const SwipeableComponent = () => {
    return (
      <div className="carousel" {...handlers}>
        {allusers.map((user, index) => {
          const isCurrentCard = index === currentIndex;
          return (
            <div
              className={`user-card${isCurrentCard ? " active" : ""}`}
              key={index}
              {...handlers}
            >
               <div class="tbg">
                <div class="tbgwrap">
                  <TiArrowSortedUp className="uparrow" />
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
                      <RiProfileLine
                        style={{
                          color: `blue`,
                          width: `100px`,
                        }}
                        id="profile"
                      />
                      <button type="button">Accept Me</button>
                    </div>
                  </div>
                  <div class="tcontrols">
                    <div class="tno">
                      <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <TiArrowSortedDown className="downarrow" />
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
        <form>
            <label>Search by Interest</label>
          <GiStairsGoal className="goalstairs" style={{size: "medium"}}></GiStairsGoal>
<select>      
<option value="">Please select an interest
</option>
<option value="Tech"> Tech
</option>
<option value="Hiking">Hiking
</option>
<option value="Photography">Photography
</option>
<option value="Gardening">Gardening
</option>
<option value="Traveling">Traveling
</option>
<option value="Health">Health
</option>
<option value="Fitness">Fitness
</option>
<option value="Finance">Finance
</option>
<option value="Crypto">Crypto
</option>
<option value="Art">Art
</option>
<option value="Music">Music
</option>
</select>
        </form>
        <SwipeableComponent />
      </div>
    </>
  );
};

export default GoalProfile;
