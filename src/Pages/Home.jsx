import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LineBar from '../Components/LineBar';

const Home = ({ user, token }) => {
  const API = import.meta.env.VITE_BASE_KEY;
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [goals, setGoals] = useState([]);
  const [friendRequest, setFriendRequest] = useState([])
  const [post, setPosts] = useState([])
  const [count, setCount] = useState(0)
  const [showCommentSection, setShowCommentSection] = useState(false);


  const toggleCommentSection = (userId) => {
    setShowCommentSection((prevState) => {
      const updatedState = { ...prevState };
      updatedState[userId.userprofile_id] = !updatedState[userId.userprofile_id] || false;
      return updatedState;
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
        setUsers(data);
        console.log(users);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API}/posts`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
        // console.log(goals);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch(`${API}/goals`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setGoals(data);
        // console.log(goals);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchGoals();
  }, []);
  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        const response = await fetch(`${API}/profiles/1/connections/`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setFriendRequest(data);
        // console.log(friendRequest);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchFriendRequests();
  }, [friendRequest]);


  const likePost = () => {

    setCount(count + 1)

  }

  useEffect(() => {
    if (!user && !token) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="home">
        <div>
          <div>
            <h1>Goal Hive Dash </h1>

            <h2></h2>
          </div>
          <div id="users" className='col'>
            <h6 id="hive-label" htmlFor="users">
              {' '}
              Community Feed
            </h6>
            <div className="scroll">
              {users.map((user, index) => {
                const isCommentSectionShown = showCommentSection[user.id] || false;
                return (
                  <div className="user" id={user.id} key={index}>
                    <p>
                      {user.firstname + ' ' + user.lastname}
                      <br />
                    </p>

                    <img id="feed" src={`${user.profile_img}`} />
                    <br />

                    {post
                      .filter((goal) => goal.post_id === user.userprofile_id)
                      .map((goal, goalIndex) => (
                        <p key={goalIndex}>〉{goal.description}</p>
                      ))}

                    <p id={user.id} key={index} onClick={() => toggleCommentSection(user.id)}>➕ Comment</p>
                    <p ><button onClick={likePost}>👍</button> Likes {count} </p>
                    {isCommentSectionShown && (
                      <div id={user.id} key={index}
                        className="comment-section"
                        style={{
                          display: isCommentSectionShown ? 'block' : 'none',
                        }}
                      >
                        <textarea id={user.id} key={index} ></textarea>
                        <button id={user.id} key={index} >Add Comment</button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <br></br>


        </div>
        <h2 className='center'>
          <div id="active-goals"  >
            <h3>Current Goals</h3>
            {goals
              .filter((goal) => goal.userprofile_id === 1)
              .map((goal, goalIndex) => (
                <p id="each-goal" key={goalIndex}><h6>📊{goal.description}</h6></p>
              ))}


            <div>
              <h3> Friend Request</h3>
              {friendRequest.map(request => (
                <div id='request' key={request.id}>
                  <p><img className='request-photo' src={request.profile_img} /><h6>{request.username} sent you a friend request.</h6></p>
                  <p><button id="accept">✅</button> Accept <br></br><button id="decline"> ❌ </button>Decline</p>

                </div>
              ))}
            </div>
          </div>

          <br></br>

          <div id="user" className='row'>
            <img id="single-photo" src={'profile1.png'} />
            <h3>@John54</h3>


          </div>
        </h2>
      </div>









    </>
  );
};

export default Home;

