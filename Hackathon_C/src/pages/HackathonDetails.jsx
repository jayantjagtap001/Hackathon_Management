import React from "react";
import { useParams, Link } from "react-router-dom";

const HackathonDetails = ({ hackathons }) => {
  const { id } = useParams();
  const hackathon = hackathons[id];

  if (!hackathon) {
    return (
      <div className="container">
        <h2>Hackathon Not Found</h2>
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>{hackathon.title}</h2>
      <p>{hackathon.description}</p>
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default HackathonDetails;