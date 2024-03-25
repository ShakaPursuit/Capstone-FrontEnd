import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewProfile = ({ user, token, }) => {
  // console.log("user: ",user)
  const API = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();

  const [newProfile, setNewProfile] = useState({
    firstname: "",
    lastname: "",
    profile_img: "",
    age: 0,
    gender: "",
    bio: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/profiles/${user.userprofile_id}`, {
      method: "PUT",
      body: JSON.stringify(newProfile),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setNewProfile(res);
      })
      .then((res) => {
        console.log("the response: ", res);
        navigate("/userProfile");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="new-profile">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={newProfile.firstname}
            onChange={handleInputChange}
            required
          />
        </label>

        <br />
        <br />
        <label>
          Last Name:
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={newProfile.lastname}
            onChange={handleInputChange}
            required
          />
        </label>

        <br />
        <br />
        <label>
          Age:
          <input
            type="number"
            min={18}
            max={100}
            placeholder="Age"
            name="age"
            value={newProfile.age}
            onChange={handleInputChange}
            required
          />
        </label>

        <br />
        <br />
        <label>
          Gender:
          <select
            name="gender"
            value={newProfile.gender}
            onChange={handleInputChange}
          >
            <option value="">Select One</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Bio:
          <textarea
            placeholder="Bio..."
            name="bio"
            value={newProfile.bio}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <input type="submit" value={"Create Profile"} />
      </form>
    </div>
  );
};

export default NewProfile;
