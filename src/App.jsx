
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Pages
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import UserProfile from "./Pages/UserProfile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProfileSettings from "./Pages/ProfileSettings";
import HiveChat from "./Pages/HiveChat";
import "./App.css";

function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/settings" element={<ProfileSettings/>}/>
          <Route path="hivechat" element={<HiveChat/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
