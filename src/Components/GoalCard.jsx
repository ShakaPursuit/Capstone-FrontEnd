import React, { useState } from "react";
import EditGoal from "../Components/EditGoal";

const GoalCard = ({ user, token, goal }) => {
  const [editGoal, setEditGoal] = useState(false);

  const onCancel = () => {
    setEditGoal(false);
  };

  if (editGoal) {
    return (
      <EditGoal
        onCancel={onCancel}
        user={user}
        token={token}
        goalID={goal.goal_id}
      />
    );
  }
  return (
    <div className="goalcard">
      <h6>
        <strong>{goal.name}</strong>
      </h6>
      <p>{goal.description}</p>
      <p>Target Date: {goal.target_date.slice(0, 10)}</p>
      <button onClick={() => setEditGoal(true)}>edit</button>
      <button>Completed</button>
    </div>
  );
};

export default GoalCard;
