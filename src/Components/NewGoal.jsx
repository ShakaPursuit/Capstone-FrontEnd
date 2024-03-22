import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./NewGoal.css";

const NewGoal = ({ user, token }) => {
  const API = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [interests, setInterests] = useState([]);
  const [goal, setGoal] = useState({
    name: "",
    target_date: "",
    description: "",
    userprofile_id: user.userprofile_id,
    interest_id: user.interest_id,
  });

  const addGoal = () => {
    try {
      fetch(`${API}/profiles/${user.userprofile_id}/goals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(goal),
      })
        .then((res) => res.json())
        .then(() => navigate("/userProfile"));
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const getInterests = () => {
    fetch(`${API}/interests`)
      .then((res) => res.json())
      .then((res) => {
        setInterests(res);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const handleTextChange = (event) => {
    setGoal({ ...goal, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addGoal();
  };

  useEffect(() => {
    getInterests();
  }, []);
  console.log(goal);
  return (
    <div className="new-goal-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-field">
          <label htmlFor="name">Goal Name:</label>
          <br />
          <input
            value={goal.name}
            onChange={handleTextChange}
            type="text"
            id="name"
            placeholder="Name Your Goal"
            required
          />
        </div>
        <br />
        <br />
        <div className="form-field">
          <label htmlFor="interests">Select an Interest:</label>
          <br />
          <select
            value={interests.interest_id}
            onChange={handleTextChange}
            id="interest_id"
            required
          >
            <option value="">Select an Interests</option>
            {interests.map(({ interest_id, name }) => {
              return <option value={interest_id}>{name}</option>;
            })}
          </select>
        </div>
        <br />
        <br />
        <div className="form-field">
          <label htmlFor="tartgetDate">Target Date:</label>
          <br />
          <input
            type="date"
            value={goal.target_date}
            onChange={handleTextChange}
            id="target_date"
            required
          />
        </div>
        <br />
        <br />
        <div className="form-field">
          <label htmlFor="description">Goal Description:</label>
          <br />
          <textarea
            value={goal.description}
            onChange={handleTextChange}
            id="description"
          />
        </div>
        <br />
        <br />
        <button type="submit">Create Goal</button>
      </form>
    </div>
  );
};

export default NewGoal;
