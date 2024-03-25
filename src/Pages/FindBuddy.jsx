// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useSwipeable } from 'react-swipeable';
// import "../Pages/carousel.css";

// const FindBuddy = () => {
//   const API = import.meta.env.VITE_BASE_URL;
//   const [goals, setGoals] = useState([]);
//   const [users, setUsers] = useState([]);
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
//         setUsers(data);
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
//     setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : users.length - 1));
//   };

//   const goToNextCard = () => {
//     setCurrentIndex((prevIndex) => (prevIndex < users.length - 1 ? prevIndex + 1 : 0));
//   };

//   const SwipeableComponent = () => {
//     const handlers = useSwipeable({
//       onSwipedLeft: () => {
//         goToNextCard();
//       },
//       onSwipedRight: () => {
//         goToPreviousCard();
//       }
//     });

//     return (
//       <div {...handlers}>
//         { <div className="carousel">       
//           {users.map((user, index) => {
//             const isCurrentCard = index === currentIndex;
//             return (
//               <div className={`user-card${isCurrentCard ? " active" : ""}`} key={index}>
//                 <p>{user.username}</p>
//                 <img id="feed" src={user.profile_img} alt="" />
//                 <div className="user-goals">
//                   <p>Age: {user.age}</p>
//                   <br />
//                   {goals
//                     .filter((goal) => goal.goal_id === user.userprofile_id)
//                     .map((goal, goalIndex) => (
//                       <p key={goalIndex}>〉{goal.description}</p>
//                     ))}
//                   {interest
//                     .filter((goal) => goal.interest_id === user.userprofile_id)
//                     .map((goal, goalIndex) => (
//                       <p key={goalIndex}>〉{goal.name}</p>
//                     ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div> }
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="carousel-container">
//         <h1>Find a Buddy</h1>
//         <main className="carousel">
//           <SwipeableComponent />
//         </main>
//         {/* <div className="carousel">       
//           {users.map((user, index) => {
//             const isCurrentCard = index === currentIndex;
//             return (
//               <div className={`user-card${isCurrentCard ? " active" : ""}`} key={index}>
//                 <p>{user.username}</p>
//                 <img id="feed" src={user.profile_img} alt="" />
//                 <div className="user-goals">
//                   <p>Age: {user.age}</p>
//                   <br />
//                   {goals
//                     .filter((goal) => goal.goal_id === user.userprofile_id)
//                     .map((goal, goalIndex) => (
//                       <p key={goalIndex}>〉{goal.description}</p>
//                     ))}
//                   {interest
//                     .filter((goal) => goal.interest_id === user.userprofile_id)
//                     .map((goal, goalIndex) => (
//                       <p key={goalIndex}>〉{goal.name}</p>
//                     ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div> */}

//         <div className="carousel-buttons">
//           <button onClick={goToPreviousCard}>Previous</button>
//           <button onClick={goToNextCard}>Next</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FindBuddy;
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useSwipeable } from "react-swipeable";
// import "../Pages/carousel.css";

// const FindBuddy = () => {
//   const API = import.meta.env.VITE_BASE_URL;
//   const [goals, setGoals] = useState([]);
//   const [users, setUsers] = useState([]);
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
//         setUsers(data);
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
//     setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : users.length - 1));
//   };

//   const goToNextCard = () => {
//     setCurrentIndex((prevIndex) => (prevIndex < users.length - 1 ? prevIndex + 1 : 0));
//   };

//   const handlers = useSwipeable({
//     onSwipedRight: goToNextCard,
//     onSwipedLeft: goToPreviousCard
//   });
  

//   const SwipeableComponent = () => {
//     return (
//       <div className="carousel" {...handlers}>
//         {users.map((user, index) => {
//           const isCurrentCard = index === currentIndex;
//           return (
//             <div className={`user-card${isCurrentCard ? " active" : ""}`} key={index} {...handlers} >
//               <p>{user.username}</p>
//               <img id="feed" src={user.profile_img} alt="" />
//               <div className="user-goals">
//                 <p>Age: {user.age}</p>
//                 <br />
//                 {goals
//                   .filter((goal) => goal.goal_id === user.userprofile_id)
//                   .map((goal, goalIndex) => (
//                     <p key={goalIndex}>〉{goal.description}</p>
//                   ))}
//                 {interest
//                   .filter((goal) => goal.interest_id === user.userprofile_id)
//                   .map((goal, goalIndex) => (
//                     <p key={goalIndex}>〉{goal.name}</p>
//                   ))}
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
//         <SwipeableComponent  />
       
//       </div>
//     </>
//   );
// };

// export default FindBuddy;