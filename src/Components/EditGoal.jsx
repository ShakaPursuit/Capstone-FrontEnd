import React, { useState, useEffect } from "react";

const EditGoal = ({ user, token, goalID }) => {
  const API = import.meta.env.VITE_BASE_URL;
  const [interests, setInterests] = useState([]);
  const [goalForm, setGoalForm] = useState({
    name: "",
    target_date: "",
    description: "",
    userprofile_id: user.userprofile_id,
    interest_id: user.interest_id,
  });
  // console.log(goalID)

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setGoalForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API}/profiles/${user.userprofile_id}/goals/${goalID}`, {
      method: "PUT",
      body: JSON.stringify(goalForm),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setGoalForm(res);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = () => {
    fetch(`${API}/profiles/${user.userprofile_id}/goals/${goalID}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        // navigate("/userProfile");
      })
      .catch((err) => console.log(err));
  };

  const getGoal = () => {
    fetch(`${API}/profiles/${user.userprofile_id}/goals/${goalID}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setGoalForm(res);
        // console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const getInterests = () => {
    fetch(`${API}/interests`)
      .then((res) => res.json())
      .then((res) => {
        setInterests(res);
        // console.log(res);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getGoal();
    getInterests();
  }, []);
  return (
    <div>
      {/* <form onSubmit={handleSubmit} className="form-container">
        <div className="form-field">
          <label htmlFor="name">Goal Name:</label>
          <br />
          <input
            value={goalForm.name}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            value={goalForm.target_date}
            onChange={handleInputChange}
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
            value={goalForm.description}
            onChange={handleInputChange}
            id="description"
          />
        </div>
        <br />
        <br />
        <button type="submit">Create Goal</button>
      </form> */}
    </div>
  );
};

export default EditGoal;
