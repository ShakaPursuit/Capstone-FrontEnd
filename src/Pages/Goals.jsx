import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewGoal from "../Components/NewGoal";

const Goals = ({ user, token }) => {
  const API = import.meta.env.VITE_BASE_URL;
  const [goals, setGoals] = useState([]);
  const [err, setError] = useState("");

  console.log("The user obj", user);

  const fetchData = () => {
    fetch(`${API}/profiles/${user.userprofile_id}/goals`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setGoals(res);
      })
      .catch((err) => {
        setError(err.message);
        setGoals(res);
      });
  };
  console.log("The goals", goals);

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="goals">
      <h1>The Goals Page</h1>
      <Link to="/goals/new">Create a Goal</Link>
      {console.log(goals)}

      {goals.map((goal) => {
        return (
          <div key={goal.goal_id} className="goalcard">
            {/* {console.log(goal.target_date.split("T"))} */}
            {/* {console.log(goal.target_date)} */}
            {/* {console.log(goal.target_date.slice(0, 10))} */}
            <h2>{goal.name}</h2>
            <p>{goal.description}</p>
            <p>Target Date: {goal.target_date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Goals;
