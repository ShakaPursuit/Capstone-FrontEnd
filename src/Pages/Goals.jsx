import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditGoal from "../Components/EditGoal";

const Goals = ({ user, token }) => {
  const API = import.meta.env.VITE_BASE_URL;
  const [goals, setGoals] = useState([]);
  const [err, setError] = useState("");

  const [editGoal, setEditGoal] = useState(false);

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
        setGoals(res);
      });
  };
  // console.log("The goals", goals);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="goals-container">
      <h1>The Goals Page</h1>

      {goals.map((goal) => {
        return (
          <div key={goal.goal_id} className="goalcard">
            <h2>{goal.name}</h2>
            <p>{goal.description}</p>
            <p>Target Date: {goal.target_date.slice(0, 10)}</p>
            <button onClick={() => setEditGoal(!editGoal)}>edit</button>
            <button>Completed</button>
            <EditGoal user={user} token={token} goalID={goal.goal_id} />
          </div>
        );
      })}
    </div>
  );
};

export default Goals;
