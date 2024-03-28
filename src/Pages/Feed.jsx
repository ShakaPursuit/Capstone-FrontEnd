import React, { useState, useEffect } from "react";

const Feed = () => {
  const API = import.meta.env.VITE_BASE_URL;

  const [users, setUsers] = useState([]);
  const [allgoals, setAllGoals] = useState([]);
  const [showCommentSection, setShowCommentSection] = useState({});

  const toggleCommentSection = (userId) => {
    setShowCommentSection((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId]
    }));
  };

  const likePost = (userId) => {
    setUsers((prevState) => {
      const updatedUsers = prevState.map((user) => {
        if (user.userprofile_id === userId) {
          const newLikeCount = (user.likeCount || 0) + 1;

        
          sessionStorage.setItem(`likeCount_${userId}`, newLikeCount.toString());

          return {
            ...user,
            likeCount: newLikeCount
          };
        }
        return user;
      });

      return updatedUsers;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/profiles`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();

        
        const updatedData = data.map((user) => ({
          ...user,
          likeCount: parseInt(sessionStorage.getItem(`likeCount_${user.userprofile_id}`), 10) || 0
        }));

        setUsers(updatedData);
      } catch (error) {
        console.error('Fetch error:', error);
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
        setAllGoals(data);
        console.log(allgoals)
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchGoals();
  }, []);

  return (
    <>
      <div className="scroll2">
      <div className="bee-container">
  <img id="feed-logo"src="/GH_Logo.png" alt="Bee" className="bee" />
</div>
   <h1>Community Feed</h1>
        {users.map((user, index) => {
          const isCommentSectionShown = !!showCommentSection[user.userprofile_id];
          const currentLikeCount = user.likeCount || 0;

          return (
            <div className="user" id={user.userprofile_id} key={index}>
              <p>
                {user.firstname + ' ' + user.lastname}
              </p>

              <img id="feed" src={`${user.profile_img}`} />

              {allgoals
                .filter((goal) => goal.goal_id === user.userprofile_id)
                .map((goal, goalIndex) => (
                  <p key={goalIndex}>〉{goal.description}</p>
                ))}

              <p>
                <button onClick={() => likePost(user.userprofile_id)}>👍</button> Likes {currentLikeCount}
              <p onClick={() => toggleCommentSection(user.userprofile_id)}>➕ Comment</p>
              </p>
              {isCommentSectionShown && (
                <div className={`comment-section ${showCommentSection[user.userprofile_id] ? 'visible' : 'hidden'}`}>
                  <textarea></textarea>
                  <button className="comment">Add Comment</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Feed;