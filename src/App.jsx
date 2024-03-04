import { useState } from "react";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProfileSettings from "./Pages/ProfileSettings";
import HiveChat from "./Pages/HiveChat";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   <Router>
      <Routes>
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
