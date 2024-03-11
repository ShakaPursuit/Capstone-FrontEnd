import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./NewGoal.css";

const NewGoal = () => {
  const API = import.meta.env.VITE_BASE_URL
  const navigate = useNavigate();
  const [goal, setGoal] = useState({
    name: "",
    interests: "",
    targetDate: "",
    description: ""
  });

  const addGoal = () => {
    const goalData = {
      name: goal.name,
      interests: goal.interests,
      targetDate: goal.targetDate,
      description: goal.description
    }
    try {
      fetch(`${API}/goals`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(goalData)
      })
      .then(res => res.json())
      .then(()=> navigate('/goals'))
    } catch (error) {
      return error
    }
  };

  const handleTextChange = (event) => {
    setGoal({ ...goal, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addGoal();
  };
console.log(goal)
  return (
    <div className="new-goal-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-field">
          <label htmlFor="name">Goal Name:</label>
          <br />
          <input value={goal.name} onChange={handleTextChange} type="text" id="name" placeholder="Name Your Goal" required />
        </div>
        <br />
        <br />
        <div className="form-field">
          <label htmlFor="interests">Select an Interest:</label>
          <br />
          <select value={goal.interests} onChange={handleTextChange} id="interests" required>
            <option value="">Select an Interests</option>
            <option value="Fitness">Fitness</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
          </select>
        </div>
        <br />
        <br />
        <div className="form-field">
          <label htmlFor="tartgetDate">Target Date:</label>
          <br />
          <select value={goal.targetDate} onChange={handleTextChange} id="targetDate" required>
            <option value="">Select Target Date</option>
            <option value="1 day">1 Day</option>
            <option value="1 week">1 Week</option>
            <option value="1 month">1 Month</option>
            <option value="3 months">3 Months</option>
          </select>
        </div>
        <br />
        <br />
        <div className="form-field">
          <label htmlFor="description">Goal Description:</label>
          <br />
          <textarea value={goal.description} onChange={handleTextChange} id="description" />
        </div>
        <br />
        <br />
        <button type="submit">Create Goal</button>
      </form>
    </div>
  );
};

export default NewGoal;
