import { useState } from "react";

import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>




      </Routes>


   </Router>
      
    </>
  );
}

export default App;
