
import { Link } from "react-router-dom";

const Dashboard = ({ hackathons }) => {
  return (
    <div className="container">
      <h2>User Dashboard</h2>
      <nav>
        <Link to="/create-hackathon">Create Hackathon</Link>
      </nav>
      <div>
        <h3>My Hackathons</h3>
        <ul>
          {hackathons.length > 0 ? (
            hackathons.map((hackathon, index) => (
              <li key={index}>
                <Link to={`/hackathon/${index}`}>{hackathon.title}</Link>
              </li>
            ))
          ) : (
            <p>No hackathons created yet</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;