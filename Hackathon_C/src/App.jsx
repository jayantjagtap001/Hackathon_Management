import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateHackathon from "./pages/CreateHackathon";
import HackathonDetails from "./pages/HackathonDetails";

const App = () => {
  const [hackathons, setHackathons] = useState([]);

  const addHackathon = (hackathon) => {
    setHackathons([...hackathons, hackathon]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard hackathons={hackathons} />}
        />
        <Route
          path="/create-hackathon"
          element={<CreateHackathon addHackathon={addHackathon} />}
        />
        <Route
          path="/hackathon/:id"
          element={<HackathonDetails hackathons={hackathons} />}
        />
      </Routes>
    </Router>
  );
};

export default App;