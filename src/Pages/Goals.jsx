import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GoalCard from "../Components/GoalCard";
import "./Goals.css";

const Goals = ({ user, token }) => {
  const API = import.meta.env.VITE_BASE_URL;
  const [goals, setGoals] = useState([]);
  const [err, setError] = useState("");

  // console.log("The user obj", user);

  const fetchData = () => {
    fetch(`${API}/profiles/${user.userprofile_id}/goals`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setGoals(res);
      })
      .catch((err) => {
        setError(err.message);
        // setGoals(res);
      });
  };
  // console.log("The goals", goals);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="goals-container">
      {/* <h1>The Goals Page</h1> */}

      {goals.map((goal) => {
        return (
          <GoalCard key={goal.goal_id} user={user} token={token} goal={goal} />
        );
      })}
    </div>
  );
};

export default Goals;
