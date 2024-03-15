import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Pages
import Home from "./Pages/Home";
import UserProfile from "./Pages/UserProfile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProfileSettings from "./Pages/ProfileSettings";
import Goals from "./Pages/Goals";
import HiveChat from "./Pages/HiveChat";
import FindBuddy from "./Pages/FindBuddy";
import InterFace from "./Pages/InterFace";

//Components
import NavBar from "./Components/NavBar";
import AccountSettings from "./Components/AccountSettings";
import "./App.css";

function App() {

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home user={user} token={token} />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route
            path="/login"
            element={<Login setUser={setUser} setToken={setToken} />}
          />
          <Route
            path="/signup"
            element={<Signup setUser={setUser} setToken={setToken} />}
          />
          <Route path="/goals" element={<Goals />} />
          <Route path="/settings" element={<ProfileSettings />} />
          <Route path="/hivechat" element={<HiveChat />} />
          <Route path="/findbuddy" element={<FindBuddy />} />
          <Route path="/accountsettings" element={<AccountSettings />} />
          <Route path="/interface" element={<InterFace/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
