import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import UserProfile from "./Pages/UserProfile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProtectedRoute from "./Pages/ProtectedRoute";
import ProfileSettings from "./Pages/ProfileSettings";
import Goals from "./Pages/Goals";
import NewGoal from "./Components/NewGoal";
import HiveChat from "./Pages/HiveChat";
// import FindBuddy from "./Pages/FindBuddy";
import GoalProfile from "./Components/GoalProfile";

//Components
import NavBar from "./Components/NavBar";
import AccountSettings from "./Components/AccountSettings";
import NewProfile from "./Components/NewProfile";

import "./App.css";
import InterFace from "./Pages/InterFace";
import Dash from "./Pages/DashBoard";
import Feed from "./Pages/Feed";
import GetCurrentGoals from "./Pages/CurrentGoals";
import FriendRequest from "./Pages/Friends";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );

  const [navBar, setNavBar] = useState(false);
  const isAuthenticated = user && token;

  // console.log(user);

  return (
    <div className="app">
      <Router>
        <NavBar navBar={navBar} setNavBar={setNavBar} />
        <Routes>

          {/* <Route path="/" element={<Home user={user} token={token} />} /> */}
          <Route path="/profile" element={<UserProfile />} />

          <Route path="/" element={<Dash user={user} token={token} />} />

          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                setToken={setToken}
                user={user}
                token={token}
              />
            }
          />
          <Route
            path="/signup"
            element={<Signup setUser={setUser} setToken={setToken} />}
          />
          {/* <Route path="/goals" element={<Goals />} /> */}
          <Route path="/settings" element={<ProfileSettings />} />
          <Route path="/hivechat" element={<HiveChat />} />
          {/* <Route path="/goalprofile" element={<GoalProfile />} /> */}
          {/* <Route path="/findbuddy" element={<FindBuddy />} /> */}
          <Route path="/accountsettings" element={<AccountSettings />} />
          <Route
            path="/userProfile"
            element={
              <ProtectedRoute
                element={UserProfile}
                isAuthenticated={!!isAuthenticated}
                setUser={setUser}
                setToken={setToken}
                user={user}
                token={token}
              />
            }
          />
          <Route
            path="/goals"
            element={
              <ProtectedRoute
                element={Goals}
                isAuthenticated={!!isAuthenticated}
                user={user}
                token={token}
              />
            }
          />
          <Route
            path="/goals/new"
            element=
            
            {
              // <ProtectedRoute
                // element=
                <NewGoal/>
                // isAuthenticated={!!user && !!token}
                // user={user}
                // token={token}
              // />
            }
          />
          <Route
            path="/goals/:goalId"
            element={
              <ProtectedRoute
                // element={EditGoal}
                isAuthenticated={!!user && !!token}
                user={user}
                token={token}
              />
            }
          />
          <Route
            path="/profiles/newProfile"
            element={
              <ProtectedRoute
                element={NewProfile}
                isAuthenticated={!!user && !!token}
                // setUser={setUser}
                // setToken={setToken}
                user={user}
                token={token}
              />
            }
          />

          <Route
          path="/interface"
          element={<InterFace/>}
          />

          


          <Route path="/" element={<Dash/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/currentgoals" element={<GetCurrentGoals/>}/>
          <Route path="/friendrequests" element ={<FriendRequest/>}/>

            <Route
path="/findbuddy"
  element ={<GoalProfile/>}
  // isAuthenticated={!!user && !!token}
  // user={user}
  // token={token}
 />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
